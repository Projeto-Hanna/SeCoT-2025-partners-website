"use client"

import { EntityContext } from "@/context/entity"
import { EntitiesEnum } from "@/types/entities"
import { useContext, useEffect } from "react"
import { Alert } from "retro-react"

export default function HackoonSpace() {
  const context = useContext(EntityContext)

  useEffect(() => {
    context?.setEntity(EntitiesEnum.HACKOONSPACE)
  })

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Alert
        color="primary"
        onClose={function noRefCheck() {}}
        showCloseButton
        title="Retro React"
      >
        https://github.com/retro-react/retro-react
      </Alert>
    </main>
  )
}
