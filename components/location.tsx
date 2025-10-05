import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { generalInfo } from "@/lib/utils"

export function Location() {
  return (
    <section id="ubicacion" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Dónde Estamos Ubicados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Visítanos en nuestro moderno consultorio, diseñado para tu comodidad y tranquilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">Dirección</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Calle Principal #123
                      <br />
                      Centro Comercial Plaza Dental, Piso 2<br />
                      Ciudad, País
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">Horario de Atención</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p>Sábados: 9:00 AM - 2:00 PM</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">+{generalInfo.phoneNumber}</p>
                    <p className="text-sm text-muted-foreground mt-1">WhatsApp disponible</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">Email</h3>
                    <a href="mailto:odangelavillamizar@gmail.com" className="text-muted-foreground">odangelavillamizar@gmail.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-[600px] rounded-2xl overflow-hidden bg-muted">
            <img
              src="./location.jpg"
              alt="Ubicación del consultorio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
