"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useRef } from "react"

export function Reviews() {
  const reviews = [
    {
      name: "María González",
      initials: "MG",
      rating: 5,
      comment:
        "Excelente atención y profesionalismo. La Dra. Villamizar es muy cuidadosa y explica todo el procedimiento. El consultorio es muy limpio y moderno.",
      date: "Hace 2 semanas",
    },
    {
      name: "Carlos Rodríguez",
      initials: "CR",
      rating: 5,
      comment:
        "Llevé a mis hijos y quedaron encantados. El trato con los niños es excepcional. Definitivamente regresaremos para todos nuestros tratamientos dentales.",
      date: "Hace 1 mes",
    },
    {
      name: "Ana Martínez",
      initials: "AM",
      rating: 5,
      comment:
        "Me hicieron un blanqueamiento dental y quedé fascinada con los resultados. Todo el equipo es muy amable y profesional. Totalmente recomendado.",
      date: "Hace 3 semanas",
    },
    {
      name: "Luis Fernández",
      initials: "LF",
      rating: 5,
      comment:
        "Después de años de tener miedo al dentista, finalmente encontré un lugar donde me siento cómodo. La atención es personalizada y sin dolor.",
      date: "Hace 1 semana",
    },
    {
      name: "Patricia Silva",
      initials: "PS",
      rating: 5,
      comment:
        "Me colocaron implantes dentales y el resultado superó mis expectativas. La Dra. Villamizar es una excelente profesional. Muy agradecida.",
      date: "Hace 2 meses",
    },
    {
      name: "Roberto Díaz",
      initials: "RD",
      rating: 5,
      comment:
        "Instalaciones de primera, tecnología moderna y un equipo humano excepcional. Los recomiendo al 100% para cualquier tratamiento dental.",
      date: "Hace 3 semanas",
    },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.3

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
    <section id="resenas" className="py-20 px-4 bg-muted/30 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            La satisfacción de nuestros pacientes es nuestro mayor logro. Lee sus experiencias.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">de 150+ reseñas</span>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* First set of cards */}
          {reviews.map((review, index) => (
            <Card
              key={`first-${index}`}
              className="border-border bg-card hover:shadow-lg transition-shadow flex-shrink-0 w-[350px]"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={`/generic-placeholder-graphic.png?height=40&width=40`} />
                    <AvatarFallback className="bg-primary/10 text-primary">{review.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
          {/* Duplicate set for infinite loop effect */}
          {reviews.map((review, index) => (
            <Card
              key={`second-${index}`}
              className="border-border bg-card hover:shadow-lg transition-shadow flex-shrink-0 w-[350px]"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={`/generic-placeholder-graphic.png?height=40&width=40`} />
                    <AvatarFallback className="bg-primary/10 text-primary">{review.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
