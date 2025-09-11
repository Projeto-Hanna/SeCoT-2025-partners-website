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
        className="object-cover shadow-sm h-auto w-auto"
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
  {
    capa: "/entities/maritacas/games/square_jump.jpg",
    nome: "Square Jump",
    download: "https://foxy5997.itch.io/square-jump",
  },
  {
    capa: "/entities/maritacas/games/kinetic.png",
    nome: "Kinetic",
    download: "https://misterproject.itch.io/kinetic",
  },
  {
    capa: "/entities/maritacas/games/nameless-ducks-game.png",
    nome: "Nameless Duck's Game",
    download: "https://cspereira.itch.io/nameless-ducks-game",
  },
  {
    capa: "/entities/maritacas/games/estige.png",
    nome: "Estige",
    download: "https://asteriskoobelisko.itch.io/estige",
  },
  {
    capa: "/entities/maritacas/games/garibot.png",
    nome: "Garibot e o Mundo de Resíduos",
    download: "https://andersongarrote.itch.io/garibot",
  },
  {
    capa: "/entities/maritacas/games/zigmor.png",
    nome: "Zigmor",
    download: "https://gregoriofornetti.itch.io/zigmor",
  },
  {
    capa: "/entities/maritacas/games/knightmare.png",
    nome: "Knightmare",
    download: "https://williamgdo.itch.io/knightmare",
  },
  {
    capa: "/entities/maritacas/games/lasergrid.png",
    nome: "Laser Grid",
    download: "https://misterproject.itch.io/laser-grid",
  },
  {
    capa: "/entities/maritacas/games/atomic-punk.png",
    nome: "Atomic Punk",
    download: "https://pedroad.itch.io/atomic-punk",
  },
  {
    capa: "/entities/maritacas/games/carcaras.png",
    nome: "Carcarás De Ferro",
    download: "https://rafabarbeta.itch.io/carcaras-de-ferro",
  },
  {
    capa: "/entities/maritacas/games/bootleg-bird.png",
    nome: "Bootleg Bird",
    download: "https://um-cara-ae.itch.io/bootlegbird",
  },
  {
    capa: "/entities/maritacas/games/dinorun.png",
    nome: "Projeto DinoRun",
    download: "https://anajuvencio.itch.io/projeto-dinorun",
  },
  {
    capa: "/entities/maritacas/games/doaa.png",
    nome: "DOAA",
    download: "https://phst2007.itch.io/doaa",
  },
  {
    capa: "/entities/maritacas/games/costurando-sonhos.png",
    nome: "Costurando Sonhos",
    download: "https://sun-ray.itch.io/costurando-sonhos",
  },
  {
    capa: "/entities/maritacas/games/jumperman.png",
    nome: "Jumperman",
    download: "https://foxy5997.itch.io/jumperman",
  },
  {
    capa: "/entities/maritacas/games/24horas.png",
    nome: "24 Horas",
    download: "https://gugabs.itch.io/24-horas",
  },
  {
    capa: "/entities/maritacas/games/under-control.png",
    nome: "Under Control",
    download: "https://aqueleerik.itch.io/under-control",
  },
  {
    capa: "/entities/maritacas/games/mental-mesh.png",
    nome: "Mental Mesh",
    download: "https://rodizio.itch.io/mental-mesh",
  },
  {
    capa: "/entities/maritacas/games/abracajur.png",
    nome: "Abracajur",
    download: "https://misterproject.itch.io/abracajur",
  },
  {
    capa: "/entities/maritacas/games/thaumos.png",
    nome: "ThaumOS",
    download: "https://misterproject.itch.io/thaumos",
  },
  {
        capa: "/entities/maritacas/games/haneru.png",
    nome: "Haneru",
    download: "https://maritacasgamedev.itch.io/haneru",
  },
  {
            capa: "/entities/maritacas/games/bisao-runner.png",
    nome: "Bisão Runner",
    download: "https://maritacasgamedev.itch.io/bisaorunner",
  }
];