"use client"

import { BreadcrumbItem, Breadcrumbs } from "retro-react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { PageContainer } from "../PageContainer"

interface MainWrapperProps {
  children?: React.ReactNode
}

const breadcrumbItems: BreadcrumbItem[] = [
  {
    href: "#",
    icon: "🏠",
    text: "Home",
  },
  {
    href: "#",
    icon: "🦝",
    text: "HackoonSpace",
  },
  {
    active: true,
    href: "hackoonspace/revistas",
    icon: "📰",
    text: "Revistas",
  },
]

export function MainWrapper({ children }: MainWrapperProps) {
  return (
    <div className="h-dvh max-w-250 w-full pl-10 pr-10 flex flex-col">
      <Header />
      <Breadcrumbs items={breadcrumbItems} separator="arrow" />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  )
}
