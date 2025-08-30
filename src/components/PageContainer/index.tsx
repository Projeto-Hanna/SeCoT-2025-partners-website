"use client"

import { twcn } from "@/utils/style"
import { Box, Container } from "retro-react"

interface PageContainerProps {
  children: React.ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <Container sx={twcn("bg-gray-300 h-full")}>
      <Box sx={twcn("flex flex-col gap-5 p-4 py-8 h-full")} variant="raised">
        {children}
      </Box>
    </Container>
  )
}
