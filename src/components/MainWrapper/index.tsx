"use client"

import { EntitiesEnum } from "@/types/entities"
import { useEntity } from "@/utils/entity"
import { usePathname } from "next/navigation"
import { BreadcrumbItem, Breadcrumbs } from "retro-react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { PageContainer } from "../PageContainer"

type EntityBreadcrumbsData = {
  bg: string
  icon: string
}

interface MainWrapperProps {
  children?: React.ReactNode
}

const entities: Record<EntitiesEnum, EntityBreadcrumbsData> = {
  secot: {
    bg: "color-red-600",
    icon: "🏠",
  },
  hackoonspace: {
    bg: "color-indigo-900",
    icon: "🦝",
  },
  maritacas: {
    bg: "color-green-600",
    icon: "🐦",
  },
  hanna: {
    bg: "color-rose-900",
    icon: "🌹",
  },
}

export function MainWrapper({ children }: MainWrapperProps) {
  const pathname = usePathname() || "/"
  const entity = useEntity<EntityBreadcrumbsData>(entities)

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment))

  const breadcrumbItems: BreadcrumbItem[] = [
    { href: "/", icon: "🏠", text: "Home" },
    ...segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")

      const icon = index === 0 ? entity.icon || "📰" : "📰"

      return {
        href,
        icon,
        text: segment.charAt(0).toUpperCase() + segment.slice(1),
        active: index === segments.length - 1,
      }
    }),
  ]

  return (
    <>
      <div className="fixed inset-0 flex justify-center">
        {/* <div className="flex-1 relative">
          <div
            className="absolute w-[300px] h-full bg-right bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/bg-left.png')" }}
          />
        </div> */}

        <div className="w-[800px] flex flex-col">
          <Header />
          <Breadcrumbs items={breadcrumbItems} separator="arrow" />
          <PageContainer>{children}</PageContainer>
          <Footer />
        </div>

        {/* <div className="flex-1 h-full relative">
          <div
            className="absolute right-0 w-[300px] h-full bg-right bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/bg-right.png')" }}
          />
        </div> */}
      </div>
    </>
  )
}
