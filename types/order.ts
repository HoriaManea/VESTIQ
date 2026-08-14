export type OrderEmailJob = {
  email: string
  products: {
    productName: string
    image: string
    price: number
  }[]
  total: number
}
