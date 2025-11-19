import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                <img src="/logo.png" alt="logo" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">MUDr. Michal Prádel</span>
                <span className="text-xs text-muted-foreground">Ortopedická ambulancia</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Profesionálna ortopedická starostlivosť v Námestove
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigácia</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Domov
                </Link>
              </li>
              <li>
                <Link href="/rezervacia" className="text-muted-foreground hover:text-primary transition-colors">
                  Rezervácia
                </Link>
              </li>
              <li>
                <Link href="/#ordinacne-hodiny" className="text-muted-foreground hover:text-primary transition-colors">
                  Ordinačné hodiny
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Červeného Kríža 62/30</li>
              <li>029 01 Námestovo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MP-ORTHOPEDICS. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  )
}
