"use client"

import Image from "next/image"
import { useContext } from "react"

import { EntityContext } from "@/context/entity"
import { EntitiesEnum } from "@/types/entities"
import Link from "next/link"
import { Button } from "retro-react"

type EntityHeaderData = {
  href: string
  imageSrc: string
  bg: string
}

const entities: Record<EntitiesEnum, EntityHeaderData> = {
  secot: {
    href: "/",
    imageSrc: "/entities/logo-secot-horizontal.png",
    bg: "bg-red-600",
  },
  hackoonspace: {
    href: "/hackoonspace",
    imageSrc: "/entities/logo-hackoonspace.png",
    bg: "bg-indigo-600",
  },
  maritacas: {
    href: "/maritacas",
    imageSrc: "/entities/logo-secot-horizontal.png",
    bg: "bg-green-600",
  },
  hanna: {
    href: "/hanna",
    imageSrc: "/entities/logo-secot-horizontal.png",
    bg: "bg-rose-900",
  },
}

export const Header = () => {
  const context = useContext(EntityContext)

  const entity = entities[context?.entity ?? EntitiesEnum.SECOT]

  return (
    <header className={`h-20 w-full flex items-center ${entity.bg}`}>
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
      <Button>Home</Button>
    </header>
  )
}
