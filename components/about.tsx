import { Award, Heart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Atención Personalizada",
      description: "Cada paciente es único y merece un tratamiento diseñado específicamente para sus necesidades.",
    },
    {
      icon: Award,
      title: "Excelencia Profesional",
      description: "Equipo de especialistas certificados con formación continua en las últimas técnicas odontológicas.",
    },
    {
      icon: Users,
      title: "Compromiso Familiar",
      description: "Atendemos a toda la familia, desde los más pequeños hasta los adultos mayores.",
    },
  ]

  return (
    <section id="nosotros" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Sobre Nosotros</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            En el Consultorio Odontológico Angela Villamizar, nos dedicamos a brindar atención dental de la más alta
            calidad con un enfoque humano y profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="./about-img.jpg"
                alt="Dra. Angela Villamizar"
                className=""
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Dra. Angela Villamizar</h3>
            <p className="text-muted-foreground leading-relaxed">
              Con más de 5 años de experiencia en odontología integral, la Dra. Angela Villamizar ha dedicado su
              carrera a transformar sonrisas y mejorar la salud bucal de sus pacientes.
            </p>
            <div className="pt-4">
              <p className="font-semibold text-foreground mb-2">Títulos y Certificaciones:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Odontóloga - Universidad Antonio Nariño</li>
                <li>• Especialista en Rehabilitación Oral</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
