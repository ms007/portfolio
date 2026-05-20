export const VERTEX_SHADER = `#version 300 es
const vec2 positions[3] = vec2[3](
  vec2(-1.0, -1.0),
  vec2( 3.0, -1.0),
  vec2(-1.0,  3.0)
);
void main() {
  gl_Position = vec4(positions[gl_VertexID], 0.0, 1.0);
}`

export const FRAGMENT_SHADER = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_pointer;
uniform vec3 u_color;
uniform float u_alpha;
uniform float u_radius;

out vec4 outColor;

// 4x4 Bayer matrix — each pixel gets a deterministic ±0.5/255 alpha nudge
// pre-quantization, so the 8-bit framebuffer resolves smooth gradients
// into ordered noise instead of visible bands.
const float bayer[16] = float[16](
   0.0,  8.0,  2.0, 10.0,
  12.0,  4.0, 14.0,  6.0,
   3.0, 11.0,  1.0,  9.0,
  15.0,  7.0, 13.0,  5.0
);

void main() {
  // gl_FragCoord origin is bottom-left; flip pointer y so clientY maps correctly.
  vec2 pointer = vec2(u_pointer.x, u_resolution.y - u_pointer.y);
  float d = distance(gl_FragCoord.xy, pointer);

  // Quadratic falloff — broader spread than cubic so the boosted alpha actually carries far.
  float t = 1.0 - smoothstep(0.0, u_radius, d);
  float a = u_alpha * t * t;

  int bx = int(mod(gl_FragCoord.x, 4.0));
  int by = int(mod(gl_FragCoord.y, 4.0));
  float dither = (bayer[by * 4 + bx] / 16.0 - 0.5) / 255.0;
  a = max(a + dither, 0.0);

  // Premultiplied alpha — matches the context's premultipliedAlpha: true.
  outColor = vec4(u_color * a, a);
}`
