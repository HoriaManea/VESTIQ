"use client"

import Image from "next/image"
import { PropsWithChildren, createContext, useContext } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@/types/products"
import { Button } from "@/components/ui/button"

type ProductCardContext = {
  product: Product
}

const ProductCardContext = createContext<ProductCardContext | undefined>(
  undefined
)

type ProductCardProps = PropsWithChildren & {
  product: Product
}

function useProductCardContext() {
  const context = useContext(ProductCardContext)
  if (!context) {
    throw new Error("useProductCardContext must be used within a ProductCard")
  }
  return context
}

export default function ProductCard({ product, children }: ProductCardProps) {
  return (
    <ProductCardContext value={{ product }}>
      <Card className="overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {children}
      </Card>
    </ProductCardContext>
  )
}

export function ProductCardImage() {
  const { product } = useProductCardContext()

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
      <Image
        fill
        src={product.imageUrl}
        alt="Event cover"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute top-3 left-3 z-10">
        <Badge variant="secondary">Featured</Badge>
      </div>
    </div>
  )
}

export function ProductCardHeader() {
  const { product } = useProductCardContext()
  return (
    <CardHeader>
      <CardTitle className="text-lg font-semibold tracking-tight">
        {product.name}
      </CardTitle>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm font-medium">${product.price}</span>

        <div className="flex items-center gap-1 text-sm text-yellow-500">
          ★ {product.rating}
          <span className="text-muted-foreground">({product.rating})</span>
        </div>
      </div>
      <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
        {product.description}
      </CardDescription>
    </CardHeader>
  )
}

export function ProductCardFooter() {
  const { product } = useProductCardContext()

  return (
    <CardFooter>
      <Button className="w-full">View Event</Button>
    </CardFooter>
  )
}
