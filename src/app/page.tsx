"use client"

import { EntityContext } from "@/context/entity"
import { EntitiesEnum } from "@/types/entities"
import Image from "next/image"
import { useContext, useEffect } from "react"

export default function Home() {
  const context = useContext(EntityContext)

  useEffect(() => {
    context?.setEntity(EntitiesEnum.SECOT)
  })

  return (
    <main className="flex row-start-2 items-center sm:items-start">
      <Image
        className="h-auto w-auto"
        src="/entities/maritacas/logo-maritacas.png"
        alt="Logo da Maritacas"
        width={100}
        height={35}
        priority
      />
      <Image
        className="h-auto w-auto"
        src="/entities/hackoonspace/logo-hackoonspace.png"
        alt="Logo do HackoonSpace"
        width={100}
        height={35}
        priority
      />
      <Image
        className="h-auto w-auto"
        src="/entities/hanna/logo-hanna.png"
        alt="Logo do Projeto Hanna"
        width={100}
        height={35}
        priority
      />
    </main>
  )
}
