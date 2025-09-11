import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"

type Jogo = {
  capa: string
  nome: string
  download: string
}

export const jogosColumns: ColumnDef<Jogo>[] = [
  {
    accessorKey: "capa",
    header: "Capa",
    cell: ({ row }) => (
      <Image
        src={row.original.capa}
        alt={row.original.nome}
        width={140}
        height={112}
        className="object-cover shadow-sm"
      />
    ),
  },
  {
    accessorKey: "nome",
    header: "Nome do jogo",
  },
  {
    accessorKey: "download",
    header: "Download",
    cell: ({ row }) => (
      <a
        href={row.original.download}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Baixar
      </a>
    ),
  },
]

export const jogosData: Jogo[] = [
  {
    capa: "/entities/maritacas/games/mices_secret.png",
    nome: "Mice's Secret",
    download: "https://aqueleerik.itch.io/mices-secret",
  },
  {
    capa: "/entities/maritacas/games/haja_paciencia.png",
    nome: "Haja Paciência",
    download: "https://biarog.itch.io/haja-paciencia",
  },
  {
    capa: "/entities/maritacas/games/80_runners.png",
    nome: "80 RUNNERS",
    download: "https://platafort-games.itch.io/80-runners",
  },
]
