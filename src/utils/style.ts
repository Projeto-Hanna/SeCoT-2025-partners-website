import { tws } from "tailwind-to-style"

export const twcn = (...args: Parameters<typeof tws>) => {
  return tws(args[0], true)
}
