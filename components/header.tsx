'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg">
              <img src="/logo.png" alt="logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-none text-foreground">MUDr. Michal Prádel</span>
              <span className="text-xs text-muted-foreground">Ortopedická ambulancia</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Domov
            </Link>
            <Link href="/rezervacia" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Rezervácia
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Domov
            </Link>
            <Link href="/rezervacia" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Rezervácia
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
