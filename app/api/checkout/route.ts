import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "@/lib/session"
import { prisma } from "@/lib/prisma"
import { orderEmailQueue } from "@/lib/queue"

export async function POST(req: NextRequest) {
  const cookie = req.cookies.get("session")?.value
  const session = await decrypt(cookie)

  if (!session?.userId) {
    return NextResponse.json({ error: "Trebuie sa fii logat" }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId as string },
    select: { email: true },
  })

  if (!user) {
    return NextResponse.json({ error: "Utilizator negasit" }, { status: 404 })
  }

  const { products, total } = await req.json()

  if (!products || products.length === 0) {
    return NextResponse.json({ error: "Cosul e gol" }, { status: 400 })
  }

  await orderEmailQueue.add("send-order-email", {
    email: user.email,
    products,
    total,
  })

  return NextResponse.json({ success: true })
}
