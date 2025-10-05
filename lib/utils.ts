import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generalInfo = {
  phoneNumber: "573142384249",
  email: "odangelavillamizar@gmail.com",
  address: "Av. Libertadores, Bahía Torres del Parque, Local C1.",
  whatsappNumber: "573142384249",
  facebookURL: "https://www.facebook.com/angela.villamizar.165?mibextid=ZbWKwL",
  instagramURL: "https://www.instagram.com/od.angelavillamizar?igsh=MXcydG5xMzlpeDNqNA==",
}

export const sendWhatsAppMessage = () => {
    const phoneNumber = generalInfo.whatsappNumber
    const message = "Hola, me gustaría agendar una cita."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

export const callPhoneNumber = () => {
  window.location.href = "tel:+"+generalInfo.phoneNumber 
}
