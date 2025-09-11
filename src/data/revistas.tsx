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
        className="object-cover shadow-sm h-auto w-auto"
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
    titulo: "Revista 2024",
    download: "https://www.hackoonspace.com/files/Revista_-_2024.pdf",
  },
    {
    capa: "/entities/hackoonspace/covers/cover_2023.png",
    titulo: "Revista 2023",
    download: "https://www.hackoonspace.com/files/Revista_-_2023.pdf",
  },
    {
    capa: "/entities/hackoonspace/covers/cover_2022.png",
    titulo: "Revista 2022",
    download: "https://www.hackoonspace.com/files/Revista_-_2022.pdf",
  },
    {
    capa: "/entities/hackoonspace/covers/cover_2021.png",
    titulo: "Revista 2021",
    download: "https://www.hackoonspace.com/files/Revista_-_2021.pdf",
  },
  {
    capa: "/entities/hackoonspace/covers/cover_2020.png",
    titulo: "Revista 2020",
    download: "https://www.hackoonspace.com/files/Revista_-_2020.pdf",
  },
    {
    capa: "/entities/hackoonspace/covers/cover_2019.png",
    titulo: "Revista 2019",
    download: "https://www.hackoonspace.com/files/Revista_-_2019.pdf",
  }
]
