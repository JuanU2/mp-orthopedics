import { Header } from '@/components/header'
import { ReservationSection } from '@/components/reservation-section'
import { Footer } from '@/components/footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rezervácia časenky | MUDr. Michal Prádel - Ortopedická ambulancia',
  description: 'Online rezervácia časenky do ortopedickej ambulancie. Vyberte si medzi rezerváciou pre dospelých alebo deti. Jednoduché objednanie cez eCasenka.',
  alternates: {
    canonical: '/rezervacia',
  },
  openGraph: {
    title: 'Rezervácia časenky | MUDr. Michal Prádel',
    description: 'Online rezervácia časenky do ortopedickej ambulancie',
    url: 'https://www.pradel.sk/rezervacia',
  },
}

export default function ReservationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ReservationSection />
      <Footer />
    </main>
  )
}
