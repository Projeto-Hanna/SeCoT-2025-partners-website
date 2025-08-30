"use client"

import { EntityContext } from "@/context/entity"
import { EntitiesEnum } from "@/types/entities"
import { twcn } from "@/utils/style"
import { useContext, useEffect } from "react"
import { Table, Text } from "retro-react"

export default function HackoonSpace() {
  const context = useContext(EntityContext)

  useEffect(() => {
    context?.setEntity(EntitiesEnum.HACKOONSPACE)
  })

  return (
    <main>
      <Text sx={twcn("text-center font-bold")}>Revistas</Text>
      <Table
        bordered
        columnWidths={["20%", "30%", "50%"]}
        data={[
          ["Jane", "25", "London"],
          ["Jack", "20", "Paris"],
          ["Jimmy", "25", "Kathmandu"],
          ["Helen", "32", "Belgrade"],
          ["James", "28", "Tokyo"],
          ["Steve", "32", "San Francisco"],
          ["Samantha", "45", "Los Angeles"],
          ["Simon", "27", "Berlin"],
          ["Sara", "34", "Sydney"],
          ["Stan", "38", "Chicago"],
          ["Selena", "23", "Austin"],
          ["Shawn", "40", "Toronto"],
          ["Stella", "29", "New Delhi"],
          ["Sam", "35", "Mumbai"],
          ["Sophie", "31", "Shanghai"],
          ["Sylvester", "33", "Seoul"],
          ["Sandy", "39", "Dallas"],
          ["Susan", "26", "Boston"],
          ["Scott", "36", "Hong Kong"],
        ]}
        headers={["Name", "Age", "City"]}
        pagination
        sortable
      />
    </main>
  )
}
