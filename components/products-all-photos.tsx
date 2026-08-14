"use client"

import Image from "next/image"
import { useState } from "react"

type ProductAllPhotosProps = {
  product: {
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
}

export default function ProductAllPhotos({ product }: ProductAllPhotosProps) {
  const [mainImage, setMainImage] = useState<string>(product.imageUrl)

  function handleSelectPhoto(productName: string): void {
    setMainImage(productName)
  }

  return (
    <div className="flex w-1/2 gap-10">
      <div className="flex flex-col gap-2">
        {product.productImages.map((image: string) => (
          <Image
            width={100}
            height={100}
            src={image}
            alt={product.name}
            key={image}
            onClick={() => handleSelectPhoto(image)}
          />
        ))}
      </div>
      <Image width={500} height={500} src={mainImage} alt={product.name} />
    </div>
  )
}
