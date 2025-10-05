"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"
import { generalInfo, sendWhatsAppMessage, callPhoneNumber } from "@/lib/utils"

export function Hero() {

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground leading-tight">
              Tu sonrisa es nuestra prioridad
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Atención odontológica integral con tecnología de vanguardia y un equipo de especialistas comprometidos con
              tu salud bucal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={sendWhatsAppMessage}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Cita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                onClick={callPhoneNumber}
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="./hero-img.jpg"
                alt="Consultorio dental moderno"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">+5 años</p>
                  <p className="text-sm text-muted-foreground">de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
