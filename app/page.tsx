import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { OfficeHours } from '@/components/office-hours'
import { Location } from '@/components/location'
import { Footer } from '@/components/footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domov | MUDr. Michal Prádel - Ortopedická ambulancia Námestovo',
  description: 'Ortopedická ambulancia v Námestove. Ordinačné hodiny, lokalizácia a informácie o profesionálnej ortopedickej starostlivosti pre dospelých a deti.',
  alternates: {
    canonical: '/',
  },
}

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
