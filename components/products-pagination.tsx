"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

export default function ProductsPagination() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const currentPage = Number(searchParams.get("page")) || 1

  function changePage(page: number) {
    const params = new URLSearchParams(searchParams)

    params.set("page", page.toString())

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Pagination className="mt-10 mb-13">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (currentPage > 1) changePage(currentPage - 1)
            }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              changePage(currentPage + 1)
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
