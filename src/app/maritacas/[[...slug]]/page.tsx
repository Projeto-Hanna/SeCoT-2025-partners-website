"use client"

import { twcn } from "@/utils/style"
import { Text } from "retro-react"

export default function HackoonSpace({}: {
  params: Promise<{ slug?: string[] }>
}) {
  return (
    <main>
      <Text sx={twcn("text-center font-bold mb-4")}>
        Confira os jogos da Maritacas GameDev
      </Text>
    </main>
  )
}
