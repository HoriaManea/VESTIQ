import AddToCart from "@/components/add-to-cart-button"
import ProductAllPhotos from "@/components/products-all-photos"
import { Star } from "lucide-react"

type Product = {
  availableProducts: number
  category: string
  description: string
  details: string[]
  id: number
  imageUrl: string
  name: string
  new: boolean
  price: string
  productImages: string[]
  rating: number
  stars: number
  stock: string
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const res = await fetch("http://localhost:3000/api/products")
  const products = await res.json()

  const product = products.find((p: Product) => p.id === Number(slug))

  return (
    <div className="flex w-auto pt-10 pb-40 pl-50">
      <ProductAllPhotos product={product} />
      <div className="flex w-1/2 flex-col gap-6">
        <div className="flex items-center">
          <Star size={20} fill="black" />
          <Star size={20} fill="black" />
          <Star size={20} fill="black" />
          <Star size={20} fill="black" /> <Star size={20} fill="black" />
          <p className="ml-3">24 reviews</p>
        </div>
        <h1 className="text-xl"> {product.name}</h1>
        <p className="text-lg">${product.price}</p>
        <div className="inline max-w-20 bg-black px-1 py-1 text-white">
          {product.stock}
        </div>
        <AddToCart
          productName={product.name}
          image={product.imageUrl}
          price={product.price}
        />
        <div className="breakClass"></div>
        <h6 className="text-sm">DESCRIPTION</h6>
        <p className="w-150 text-sm">{product.description}</p>
        <h6 className="text-sm">Details</h6>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          {product.details.map((detail: string) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
