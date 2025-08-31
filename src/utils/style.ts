import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { tws } from "tailwind-to-style"

export const twcn = (...args: Parameters<typeof tws>) => {
  return tws(args[0], true)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
