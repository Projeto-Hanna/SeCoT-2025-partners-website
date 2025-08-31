"use client"

import { EntitiesEnum } from "@/types/entities"
import { useEntity } from "@/utils/entity"
import { twcn } from "@/utils/style"
import Image from "next/image"
import Link from "next/link"
import { Navbar, NavItem, NavLogo } from "retro-react"

type EntityHeaderData = {
  href: string
  imageSrc: string
  color: string
  links: {
    label: string
    href: string
  }[]
}

const entities: Record<EntitiesEnum, EntityHeaderData> = {
  secot: {
    href: "/",
    imageSrc: "/entities/secot/logo-secot-horizontal.png",
    color: "red-600",
    links: [
      { label: "Projetos", href: "/projects" },
      { label: "Sobre", href: "/about" },
    ],
  },
  hackoonspace: {
    href: "/hackoonspace",
    imageSrc: "/entities/hackoonspace/logo-hackoonspace.png",
    color: "indigo-900",
    links: [
      { label: "Revistas", href: "/hackoonspace/revistas" },
      { label: "Inscrições", href: "/hackoonspace/inscrições" },
    ],
  },
  maritacas: {
    href: "/maritacas",
    imageSrc: "/entities/maritacas/logo-maritacas.png",
    color: "green-600",
    links: [
      { label: "Jogos", href: "/maritacas/jogos" },
      { label: "Itch.io", href: "https://maritacasgamedev.itch.io/" },
    ],
  },
  hanna: {
    href: "/hanna",
    imageSrc: "/entities/hanna/logo-hanna.png",
    color: "rose-900",
    links: [
      { label: "Projetos", href: "/hanna/projetos" },
      { label: "Sobre", href: "/hanna/sobre" },
    ],
  },
}

export const Header = () => {
  const entity = useEntity<EntityHeaderData>(entities)

  return (
    <Navbar
      variant="default"
      style={twcn(`h-20 w-full flex items-center bg-${entity.color}`)}
    >
      <NavLogo>
        <Link href={entity.href}>
          <Image
            src={entity.imageSrc}
            alt="Logo da entidade"
            height={80}
            width={200}
            className="h-20 w-auto p-2"
            priority
          />
        </Link>
      </NavLogo>
      <NavItem style={twcn(`text-${entity.color} font-bold`)}>
        <Link href="/">Home</Link>
      </NavItem>
      {entity.links.map((link, i) => (
        <NavItem style={twcn(`text-${entity.color} font-bold`)} key={i}>
          <Link href={link.href}>{link.label}</Link>
        </NavItem>
      ))}
    </Navbar>
  )
}
