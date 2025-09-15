"use client"

import { twcn } from "@/utils/style"
import { Button, Text } from "retro-react"
import Image from "next/image"

export default function Hanna({}: { params: Promise<{ slug?: string[] }> }) {
  return (
    <main className="flex flex-1 gap-10 flex-col text-center align-center justify-center">
      <Text sx={twcn("text-center font-bold")}>Que que cê veio explorar pra cá, meu fiu?</Text>
      <Image
        className="h-auto hover:opacity-75 pointer ml-auto mr-auto"
        src="/entities/hanna/reversa.png"
        alt="Logo da Hanna Reversa"
        width={550}
        height={35}
        priority
      />
      <Text sx={twcn("text-center font-bold mb-2")}>Se eu fosse você, eu vortava já</Text>
    </main>
  )
}
