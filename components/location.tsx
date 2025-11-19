import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Location() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
              <MapPin size={16} />
              <span>Kde nás nájdete</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Lokalita</h2>
            <p className="text-lg text-muted-foreground">Navštívte nás v centre Námestova</p>
          </div>

          <div className="flex justify-center items-center gap-6 mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Adresa</h3>
                <p className="text-sm text-muted-foreground">
                  Červeného Kríža 62/30<br />
                  029 01 Námestovo
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle>Mapa</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video w-full bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.4166730718814!2d19.474191989095278!3d49.40584094285293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715c8ed42240807%3A0xb137bd5d246530fc!2sOrtopedick%C3%A1%20ambulancia%20MUDr.Michal%20Pr%C3%A1del!5e1!3m2!1ssk!2scz!4v1763545300928!5m2!1ssk!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
