"use client"

import { useContext } from "react"

import { EntityContext } from "@/context/entity"
import { EntitiesEnum } from "@/types/entities"
import { twcn } from "@/utils/style"
import Image from "next/image"
import Link from "next/link"
import { Navbar, NavItem, NavLogo } from "retro-react"

type EntityHeaderData = {
  href: string
  imageSrc: string
  bg: string
  links: {
    label: string
    href: string
  }[]
}

const entities: Record<EntitiesEnum, EntityHeaderData> = {
  secot: {
    href: "/",
    imageSrc: "/entities/logo-secot-horizontal.png",
    bg: "bg-red-600",
    links: [
      { label: "Projetos", href: "/projects" },
      { label: "Sobre", href: "/about" },
    ],
  },
  hackoonspace: {
    href: "/hackoonspace",
    imageSrc: "/entities/logo-hackoonspace.png",
    bg: "bg-indigo-900",
    links: [
      { label: "Revistas", href: "/hackoonspace/revistas" },
      { label: "Inscrições", href: "/hackoonspace/inscrições" },
    ],
  },
  maritacas: {
    href: "/maritacas",
    imageSrc: "/entities/logo-secot-horizontal.png",
    bg: "bg-green-600",
    links: [
      { label: "Projetos", href: "/maritacas/projects" },
      { label: "Sobre", href: "/maritacas/about" },
    ],
  },
  hanna: {
    href: "/hanna",
    imageSrc: "/entities/logo-secot-horizontal.png",
    bg: "bg-rose-900",
    links: [
      { label: "Projetos", href: "/hanna/projects" },
      { label: "Sobre", href: "/hanna/about" },
    ],
  },
}

export const Header = () => {
  const context = useContext(EntityContext)

  const entity = entities[context?.entity ?? EntitiesEnum.SECOT]

  if (!entity) return null

  return (
    <Navbar
      variant="default"
      style={twcn(`h-20 w-full flex items-center ${entity.bg}`)}
    >
      <NavLogo>
        <Link href={entity.href}>
          <Image
            src={entity.imageSrc}
            alt="Logo da SeCoT branca"
            height={80}
            width={200}
            className="h-20 w-auto p-2"
            priority
          />
        </Link>
      </NavLogo>
      <NavItem style={twcn("text-indigo-900 font-bold")}>
        <Link href="/" onClick={function noRefCheck() {}}>
          Home
        </Link>
      </NavItem>
      {entity.links.map((link, i) => (
        <NavItem style={twcn("text-indigo-900 font-bold")} key={i}>
          <Link href={link.href} onClick={function noRefCheck() {}}>
            {link.label}
          </Link>
        </NavItem>
      ))}
    </Navbar>
  )
}
