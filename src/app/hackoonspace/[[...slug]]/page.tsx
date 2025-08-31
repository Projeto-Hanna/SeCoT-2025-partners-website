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
      <Text sx={twcn("text-center font-bold mb-4")}>Revistas</Text>
      <DataTable columns={revistaColumns} data={revistaData} />
    </main>
  )
}
