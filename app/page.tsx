import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { OfficeHours } from '@/components/office-hours'
import { Location } from '@/components/location'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <OfficeHours />
      <Location />
      <Footer />
    </main>
  )
}
