"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Agenda Tu Cita</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita.
          </p>
        </div>

        <Card className="border-border bg-card">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-card-foreground">
                    Teléfono *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-8900"
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-card-foreground">
                    Servicio de Interés
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="ortodoncia">Ortodoncia</option>
                    <option value="endodoncia">Endodoncia</option>
                    <option value="periodoncia">Periodoncia</option>
                    <option value="odontopediatria">Odontopediatría</option>
                    <option value="prostodoncia">Prostodoncia</option>
                    <option value="estetica">Odontología Estética</option>
                    <option value="implantes">Implantología</option>
                    <option value="general">Odontología General</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-card-foreground">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu consulta o necesidades..."
                  rows={5}
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Solicitud
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Llamar para Agendar
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo para coordinar tu cita.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
