import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"

type Revista = {
  capa: string
  titulo: string
  download: string
}

export const revistaColumns: ColumnDef<Revista>[] = [
  {
    accessorKey: "capa",
    header: "Capa",
    cell: ({ row }) => (
      <Image
        src={row.original.capa}
        alt={row.original.titulo}
        width={80}
        height={112}
        className="object-cover shadow-sm"
      />
    ),
  },
  {
    accessorKey: "titulo",
    header: "Título da Revista",
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

export const revistaData: Revista[] = [
  {
    capa: "/entities/hackoonspace/covers/cover_2024.png",
    titulo: "Revista Exemplo 1",
    download: "https://www.hackoonspace.com/files/Revista_-_2019.pdf",
  },
  {
    capa: "/entities/hackoonspace/covers/cover_2024.png",
    titulo: "Revista Exemplo 2",
    download: "https://www.hackoonspace.com/files/Revista_-_2020.pdf",
  },
]
