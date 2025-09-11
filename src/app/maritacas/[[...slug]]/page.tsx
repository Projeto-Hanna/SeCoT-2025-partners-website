"use client"

import { DataTable } from "@/components"
import { jogosColumns, jogosData } from "@/data/jogos"
import { twcn } from "@/utils/style"
import { Text } from "retro-react"

export default function HackoonSpace({}: {
  params: Promise<{ slug?: string[] }>
}) {
  return (
    <main>
      <Text sx={twcn("text-center font-bold mb-4")}>
        Confira os jogos da Maritacas GameDev!
      </Text>
      <DataTable columns={jogosColumns} data={jogosData} />
    </main>
  )
}
