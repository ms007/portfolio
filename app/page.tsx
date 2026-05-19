import { HomeHeader } from "@/components/home-header"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[7xl] px-6 md:px-8 lg:px-24">
      <div className="flex flex-col gap-8 py-16 lg:flex-row lg:gap-0 lg:py-24">
        <HomeHeader />
        <main id="content" className="min-w-0 flex-1 lg:w-[52%] lg:pt-24 lg:pl-16"></main>
      </div>
    </div>
  )
}
