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
    newTab?: boolean;
  }[]
}

const entities: Record<EntitiesEnum, EntityHeaderData> = {
  secot: {
    href: "/",
    imageSrc: "/entities/secot/logo-secot-horizontal.png",
    color: "red-600",
    links: [
      { label: "HackoonSpace", href: "/hackoonspace" },
      { label: "Maritacas", href: "/maritacas" },
      { label: "Hanna", href: "/hanna" },
    ],
  },
  hackoonspace: {
    href: "/hackoonspace",
    imageSrc: "/entities/hackoonspace/logo-hackoonspace.png",
    color: "indigo-900",
    links: [
      { label: "Revistas", href: "/hackoonspace/revistas" },
      { label: "Inscrições", href: "https://forms.gle/bcoDWZhCEb5PPWiw6", newTab: true },
    ],
  },
  maritacas: {
    href: "/maritacas",
    imageSrc: "/entities/maritacas/logo-maritacas.png",
    color: "green-600",
    links: [
      { label: "Jogos", href: "/maritacas/jogos" },
      { label: "Itch.io", href: "https://maritacasgamedev.itch.io/", newTab: true },
    ],
  },
  hanna: {
    href: "/hanna",
    imageSrc: "/entities/hanna/logo-hanna.png",
    color: "rose-900",
    links: [
      { label: "Links", href: "/hanna" },
      { label: "Sobre", href: "https://www.projetohanna.com/", newTab: true },
    ],
  },
}

export const Header = () => {
  const entity = useEntity<EntityHeaderData>(entities);

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
      <Link href="/">
        <NavItem style={twcn(`text-${entity.color} font-bold`)}>
          Home
        </NavItem>
      </Link>
      {entity.links.map((link, i) => (
        <Link key={i} href={link.href} target={link.newTab ? "_blank" : undefined}>
          <NavItem style={twcn(`text-${entity.color} font-bold`)}>
            {link.label}
          </NavItem>
        </Link>
      ))}
    </Navbar>
  )
}
