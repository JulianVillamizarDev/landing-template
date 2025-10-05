"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
              <img className="w-full h-full object-cover" src="./logo.jpg" alt="logo" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-foreground">Consultorio Odontológico</span>
              <span className="text-sm text-muted-foreground">Angela Villamizar</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("ubicacion")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection("resenas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Reseñas
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("ubicacion")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection("resenas")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Reseñas
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contacto
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
