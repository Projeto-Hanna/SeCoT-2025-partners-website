"use client"

import { twcn } from "@/utils/style"
import { Text } from "retro-react"

import { DataTable } from "@/components"
import { revistaColumns, revistaData } from "../../../data/revistas"
import Link from "next/link"

export default function HackoonSpace({}: {
  params: Promise<{ slug?: string[] }>
}) {
  return (
    <main>
      <Text sx={twcn("text-center font-bold mb-4")}>Confira as revistas com artigos e projetos do HackoonSpace</Text>
      <Text sx={twcn("text-center font-bold mb-4 bg-violet-500 text-violet-100")}>Não se esqueça que as <Link className="text-purple-800 hover:underline" href="https://forms.gle/bcoDWZhCEb5PPWiw6" target="_blank">inscrições estão abertas!</Link></Text>
      <DataTable columns={revistaColumns} data={revistaData} />
    </main>
  )
}
