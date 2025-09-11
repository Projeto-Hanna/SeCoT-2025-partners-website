"use client"

import { twcn } from "@/utils/style"
import { Text } from "retro-react"

import { DataTable } from "@/components"
import { revistaColumns, revistaData } from "../../../data/revistas"

export default function HackoonSpace({}: {
  params: Promise<{ slug?: string[] }>
}) {
  return (
    <main>
      <Text sx={twcn("text-center font-bold mb-4")}>Confira as revistas com artigos e projetos do HackoonSpace</Text>
      <Text sx={twcn("text-center font-bold mb-4 bg-violet-500")}>Não se esqueça que as inscrições estão abertas!</Text>
      <DataTable columns={revistaColumns} data={revistaData} />
    </main>
  )
}
