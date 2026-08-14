import { Product } from "@/types/products"
import ProductCard, {
  ProductCardFooter,
  ProductCardHeader,
  ProductCardImage,
} from "./peoduct-card"
import Link from "next/link"

export async function fetchFilteredProducts(
  productCategory: string,
  query: string,
  currentPage: number,
  ITEMS_PER_PAGE = 8
) {
  const products = await fetch(`http://localhost:3000/api/products`)
  const res = await products?.json()

  const filteredProducts = res
    .filter((product: Product) =>
      product.name.toLowerCase().includes(query?.toLowerCase())
    )
    .filter((product: Product) => product.category === `${productCategory}`)

  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  return filteredProducts.slice(start, end)
}

export default async function Products({
  productCategory,
  query,
  currentPage,
}: {
  productCategory: string
  query: string
  currentPage: number
}) {
  const products = await fetchFilteredProducts(
    productCategory,
    query,
    currentPage
  )

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product}>
          <Link href={`/denim/${product.id}`}>
            <ProductCardImage />
            <ProductCardHeader />
            <ProductCardFooter />
          </Link>
        </ProductCard>
      ))}
    </div>
  )
}
