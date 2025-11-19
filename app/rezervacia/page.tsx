import { Header } from '@/components/header'
import { ReservationSection } from '@/components/reservation-section'
import { Footer } from '@/components/footer'

export default function ReservationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ReservationSection />
      <Footer />
    </main>
  )
}
