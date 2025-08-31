import { EntitiesEnum } from "@/types/entities"
import { usePathname } from "next/navigation"

export const useEntity = <T>(entitiesData: Record<EntitiesEnum, T>): T => {
  const pathname = usePathname() || "/"

  const entity: T = pathname.startsWith("/hackoonspace")
    ? entitiesData.hackoonspace
    : pathname.startsWith("/maritacas")
      ? entitiesData.maritacas
      : pathname.startsWith("/hanna")
        ? entitiesData.hanna
        : entitiesData.secot

  return entity
}
