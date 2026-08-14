import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { decrypt } from "./lib/session"

const protectedRoutes = ["/denim"]
const publicRoutes = ["/login", "/signup"]

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  const cookie = request.cookies.get("session")?.value
  const session = cookie ? await decrypt(cookie) : null

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/denim", request.url))
  }

  return NextResponse.next()
}
