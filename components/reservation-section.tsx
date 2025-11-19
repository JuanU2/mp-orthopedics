'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Printer, User, Baby, X } from 'lucide-react'
import { useState } from 'react'

export function ReservationSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="py-16 md:py-24 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
              <Calendar size={16} />
              <span>Online rezervácia</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Rezervácia časenky</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jednoduché objednanie prostredníctvom našej online rezervácie
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Ako sa objednať?</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Rezerváciu časenky je možné vykonať prostredníctvom rezervačného portálu{' '}
                    <span className="font-semibold text-foreground">eCasenka</span>.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Online rezervácia</h3>
                      <p className="text-sm text-muted-foreground">
                        Kliknite na tlačidlo nižšie a rezervujte si termín cez eCasenka
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Priamo v ambulancii</h3>
                      <p className="text-sm text-muted-foreground">
                        Alternatívne je možné si časenku vytlačiť priamo pred ambulanciou
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-muted-foreground" />
                    <p className="text-muted-foreground">
                      K dispozícii je <span className="font-semibold text-foreground">10 lístkov denne</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Printer size={16} className="text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Tlač lístkov začína o <span className="font-semibold text-foreground">6:15</span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    V prípade detského dňa (streda) o <span className="font-semibold text-foreground">10:30</span>
                  </p>
                </div>

                <Button size="lg" className="w-full shadow-lg" onClick={() => setShowModal(true)}>
                  <Calendar size={18} className="mr-2" />
                  Rezervovať online
                </Button>
              </CardContent>
            </Card>

            <div className="relative">
              <Card className="overflow-hidden shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 border-0">
                <CardContent className="p-0">
                  <img
                    src="/person-using-medical-kiosk-reservation-system-orth.jpg"
                    alt="Rezervačný systém"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
              
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-2xl px-8 py-4 shadow-2xl">
                <p className="text-lg font-bold">ORTOPEDICKÁ</p>
                <p className="text-sm opacity-90">AMBULANCIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <Card className="w-full max-w-lg shadow-2xl animate-in zoom-in-95">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Vyberte typ pacienta</h2>
                  <p className="text-muted-foreground">Prosím, zvoľte kategóriu pre rezerváciu</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowModal(false)}
                  className="rounded-full"
                >
                  <X size={20} />
                </Button>
              </div>

              <div className="space-y-4">
                <Card className="border-2 hover:border-primary hover:shadow-md transition-all cursor-pointer group">
                  <a
                    href="https://www.ecasenka.sk/ordinacia/mp-orthopedicssro-mudrmichalpradel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <User size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">Dospelý pacient</h3>
                        <p className="text-sm text-muted-foreground">
                          Rezervácia pre dospelých pacientov
                        </p>
                      </div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        →
                      </div>
                    </div>
                  </a>
                </Card>

                <Card className="border-2 hover:border-primary hover:shadow-md transition-all cursor-pointer group">
                  <a
                    href="https://www.ecasenka.sk/ordinacia/detskydenstredamudrmichalpradel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Baby size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">Dieťa</h3>
                        <p className="text-sm text-muted-foreground">
                          Rezervácia pre detských pacientov
                        </p>
                      </div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        →
                      </div>
                    </div>
                  </a>
                </Card>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  Po výbere budete presmerovaní na rezervačný systém eCasenka
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  )
}
