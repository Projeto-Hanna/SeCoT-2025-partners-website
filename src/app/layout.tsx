import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";
import { EntityProvider } from "@/context/entity";
import { EntitiesEnum } from "@/types/entities";

export const metadata: Metadata = {
  title: "Projeto Hanna - SeCoT XVII",
  description:
    "Site feito pela comunidade Projeto Hanna, para divulgar projetos e atividades de nossos membros e parceiros na SeCoT (Semana de Computação e Tecnologia) da UFSCar - Sorocaba.",
  authors: {
    name: "Projeto Hanna",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`flex flex-col items-center justify-content-center antialiased`}
      >
        <EntityProvider>
          <div className="h-dvh max-w-250 w-full pl-10 pr-10 flex flex-col">
            <Header />
            <div className="flex-1 bg-gray-50 p-10">{children}</div>
            <Footer />
          </div>
        </EntityProvider>
      </body>
    </html>
  );
}
