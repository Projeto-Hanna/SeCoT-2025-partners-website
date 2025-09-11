import { MainWrapper } from "@/components/MainWrapper"
import { EntityProvider } from "@/context/entity"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Projeto Hanna - SeCoT XVII",
  description:
    "Site feito pela comunidade Projeto Hanna, para divulgar projetos e atividades de nossos membros e parceiros na SeCoT (Semana de Computação e Tecnologia) da UFSCar - Sorocaba.",
  authors: {
    name: "Projeto Hanna",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`flex flex-col items-center justify-center antialiased`}
      >
        <EntityProvider>
          <MainWrapper>{children}</MainWrapper>
        </EntityProvider>
      </body>
    </html>
  )
}
