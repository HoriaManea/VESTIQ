export type CartProduct = {
  productName: string
  image: string
  price: number
}

export type SidebarContextType = {
  handleShowSidebar: () => void
  handleAddToCart: (product: CartProduct) => void
  handleCheckout: () => void
  cartProducts: CartProduct[]
  cartProductsCount: number
  isCheckingOut: boolean
}
