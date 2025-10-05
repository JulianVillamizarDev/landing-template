"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smile, Sparkles, Baby, Wrench, Crown, Drill, Bone, Stethoscope } from "lucide-react"
import { useEffect, useRef } from "react"
import { sendWhatsAppMessage } from "@/lib/utils"

export function Services() {
  const services = [
    {
      icon: Smile,
      title: "Ortodoncia",
      description: "Corrección de la posición de los dientes y mandíbula con brackets tradicionales e invisibles.",
    },
    {
      icon: Drill,
      title: "Endodoncia",
      description: "Tratamiento de conductos radiculares para salvar dientes dañados o infectados.",
    },
    {
      icon: Stethoscope,
      title: "Periodoncia",
      description: "Prevención y tratamiento de enfermedades de las encías y tejidos de soporte dental.",
    },
    {
      icon: Baby,
      title: "Odontopediatría",
      description: "Atención dental especializada para niños en un ambiente amigable y seguro.",
    },
    {
      icon: Crown,
      title: "Prostodoncia",
      description: "Restauración y reemplazo de dientes con prótesis, coronas y puentes de alta calidad.",
    },
    {
      icon: Sparkles,
      title: "Odontología Estética",
      description: "Blanqueamiento, carillas y diseño de sonrisa para mejorar la apariencia de tus dientes.",
    },
    {
      icon: Bone,
      title: "Implantología",
      description: "Implantes dentales de última generación para reemplazar dientes perdidos de forma permanente.",
    },
    {
      icon: Wrench,
      title: "Odontología General",
      description: "Limpiezas, obturaciones, extracciones y cuidado preventivo para toda la familia.",
    },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth / 2

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0
        }

        scrollContainer.scrollLeft = scrollPosition
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <section id="servicios" className="py-20 px-4 bg-muted/30 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ofrecemos una amplia gama de especialidades odontológicas para cuidar tu salud bucal de manera integral.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* First set of cards */}
          {services.map((service, index) => (
            <Card
              key={`first-${index}`}
              className="border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1 flex-shrink-0 w-[280px]"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
          {/* Duplicate set for infinite loop effect */}
          {services.map((service, index) => (
            <Card
              key={`second-${index}`}
              className="border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1 flex-shrink-0 w-[280px]"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">¿No encuentras el servicio que buscas?</p>
          <button onClick={sendWhatsAppMessage} className="text-primary font-semibold hover:underline">Contáctanos para más información</button>
        </div>
      </div>
    </section>
  )
}
