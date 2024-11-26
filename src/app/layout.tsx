import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "../styles/globals.css"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website showcasing innovative development projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
