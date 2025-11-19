import { Card } from '@/components/ui/card'
import { Activity } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Activity size={16} />
              <span>Profesionálna ortopedická starostlivosť</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              MP-ORTHOPEDICS
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Moderná ortopedická ambulancia v srdci Námestova. Poskytujeme komplexnú diagnostiku a liečbu ortopedických problémov s individuálnym prístupom ku každému pacientovi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/rezervacia"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
              >
                Objednať sa online
              </a>
              <a
                href="#ordinacne-hodiny"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                Ordinačné hodiny
              </a>
            </div>
          </div>

          <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-xl">
            <div className="aspect-square flex items-center justify-center p-8 md:p-12">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Ortopedická ilustrácia"
                  className="w-full h-126 object-contain"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-2xl px-6 py-3 shadow-lg">
                  <p className="text-sm font-semibold">ORTOPEDICKÁ AMBULANCIA</p>
                  <p className="text-xs opacity-90">NÁMESTOVO</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
    </section>
  )
}
