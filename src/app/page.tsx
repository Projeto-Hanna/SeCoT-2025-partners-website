"use client"

import { EntityContext } from "@/context/entity"
import { EntitiesEnum } from "@/types/entities"
import { twcn } from "@/utils/style"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect } from "react"
import { Text } from "retro-react"

export default function Home() {
  const context = useContext(EntityContext)

  useEffect(() => {
    context?.setEntity(EntitiesEnum.SECOT)
  })

  return (
    <main className="flex flex-1 gap-10 flex-col text-center align-center justify-center">
      <Text variant="h4" sx={twcn("text-center font-bold mb-4")}>Escolha uma entidade para conhecer mais:</Text>

      <div className="flex gap-10 text-center align-center justify-center">
        <Link href="/maritacas">
          <Image
            className="h-auto w-auto hover:opacity-75 pointer jump-element"
            src="/entities/maritacas/logo-maritacas.png"
            alt="Logo da Maritacas"
            width={100}
            height={35}
            priority
          />
          <Text sx={twcn("text-center font-bold mb-4")}>Maritacas GameDev</Text>
        </Link>

        <Link href="/hackoonspace">
          <Image
            className="h-auto w-auto hover:opacity-75 pointer jump-element"
            src="/entities/hackoonspace/logo-hackoonspace-full.png"
            alt="Logo do HackoonSpace"
            width={100}
            height={35}
            priority
          />
          <Text sx={twcn("text-center font-bold mb-4")}>HackoonSpace</Text>
        </Link>

        <Link href="/hanna">
          <Image
            className="h-auto w-auto hover:opacity-75 pointer jump-element"
            src="/entities/hanna/logo-hanna.png"
            alt="Logo do Projeto Hanna"
            width={100}
            height={35}
            priority
          />
          <Text sx={twcn("text-center font-bold mb-4")}>Projeto Hanna</Text>
        </Link>
      </div>
    </main>
  )
}
