"use client"

import { useCart } from "@/contexts/cart-contex"
import { CartProduct } from "@/types/cart"

export default function AddToCart({ productName, image, price }: CartProduct) {
  const { handleAddToCart } = useCart()

  return (
    <button
      onClick={() => handleAddToCart({ productName, image, price })}
      className="w-100 cursor-pointer bg-black pt-3 pb-3 text-white"
    >
      ADD TO BAG
    </button>
  )
}
