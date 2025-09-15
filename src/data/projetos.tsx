import { twcn } from "@/utils/style"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { Text } from "retro-react"

enum ProjetoEnum {
  SITE = 'SITE',
  JOGO = 'JOGO',
  BOT = 'BOT',
}

type Projeto = {
  capa: string
  tipo: ProjetoEnum,
  nome: string
  link: string
}

export const projetosColumns: ColumnDef<Projeto>[] = [
  {
    accessorKey: "tipo",
    header: "Tipo",
    cell: ({ row }) => (
      <Text variant="small" sx={twcn("text-center font-bold")}>{row.original.tipo}</Text>
    ),
  },
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
    header: "Nome do projeto",
  },
  {
    accessorKey: "link",
    header: "Link",
    cell: ({ row }) => (
      <a
        href={row.original.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Acessar
      </a>
    ),
  },
]

export const projetosData: Projeto[] = [
  {
    capa: "/entities/hanna/projects/tower-defense.png",
    tipo: ProjetoEnum.JOGO,
    nome: "Tower Defense (versão de teste)",
    link: "https://infinitemarcus.itch.io/tower-defense-beta",
  },
  {
    capa: "/entities/hanna/projects/runner.png",
    tipo: ProjetoEnum.JOGO,
    nome: "Space Endless Runner",
    link: "https://projeto-hanna.itch.io/space-endless-runner",
  },
  {
    capa: "/entities/hanna/projects/natal.png",
    tipo: ProjetoEnum.JOGO,
    nome: "Jogo de Natal 2022",
    link: 'https://infinitemarcus.github.io/hanna-natal-2022/',
  },
  {
    capa: '/entities/hanna/projects/bot-discord.png',
    tipo: ProjetoEnum.BOT,
    nome: 'Bot de Discord da Hanna',
    link: 'https://top.gg/bot/836287197371301979/invite',
  },
  {
    capa: '/entities/hanna/projects/bot-twitch.png',
    tipo: ProjetoEnum.BOT,
    nome: 'Bot de Twitch da Hanna',
    link: 'https://github.com/Projeto-Hanna/Hanna-Twitch-Bot',
  },
  {
    capa: '/entities/hanna/projects/site.png',
    tipo: ProjetoEnum.SITE,
    nome: 'Site do Projeto Hanna',
    link: 'https://www.projetohanna.com/',
  },
    {
    capa: '/entities/hanna/projects/secot.png',
    tipo: ProjetoEnum.SITE,
    nome: 'Site em parceria com entidades (SeCoT 2025)',
    link: '/',
  }
];