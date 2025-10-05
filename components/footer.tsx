import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { generalInfo } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <img className="w-full h-full object-cover" src="./logo.jpg" alt="logo" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-card-foreground">Consultorio Odontológico</span>
                <span className="text-sm text-muted-foreground">Angela Villamizar</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu salud bucal es nuestra prioridad. Atención profesional y personalizada para toda la familia.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-card-foreground">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Ortodoncia
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Endodoncia
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Implantes
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Estética Dental
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-card-foreground">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+{generalInfo.phoneNumber}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{generalInfo.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{generalInfo.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-card-foreground">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href={generalInfo.facebookURL}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                target="_blank"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={generalInfo.instagramURL}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-card-foreground text-sm">Horario</h4>
              <p className="text-sm text-muted-foreground">Lun - Vie: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Sábados: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Consultorio Odontológico Angela Villamizar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
