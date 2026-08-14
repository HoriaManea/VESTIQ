import React from "react"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { Funnel } from "lucide-react"
import { Field } from "@/components/ui/field"
import ButtonReusable from "@/components/ui/Button/button-reusable"
import Products from "@/components/products"
import ProductsPagination from "@/components/products-pagination"
import { SearchInput } from "@/components/ui/seach-input"

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  return (
    <SidebarProvider>
      <SidebarInset>
        <div className="flex w-full justify-center px-4 pt-6">
          <Field orientation="horizontal" className="flex max-w-md">
            <SearchInput
              type="search"
              className="h-11"
              placeholder="Search products..."
            />
          </Field>
        </div>
        <div className="flex flex-col p-6">
          <Products
            query={query}
            currentPage={currentPage}
            productCategory="shorts"
          />
        </div>
        <ProductsPagination />
      </SidebarInset>
    </SidebarProvider>
  )
}
