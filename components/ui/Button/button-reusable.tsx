"use client"

import { useModal } from "@/contexts/modal-context"

export default function ButtonReusable({ children, className = "", ...props }) {
  const { openModal } = useModal()

  return (
    <button
      onClick={openModal}
      className={`flex cursor-pointer items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
