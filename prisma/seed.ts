import { prisma } from "../lib/prisma"
import products from "./products.json" with { type: "json" }
async function main() {
  await prisma.product.deleteMany()

  await prisma.product.createMany({
    data: products,
  })
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })
