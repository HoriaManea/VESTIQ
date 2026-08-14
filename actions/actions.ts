"use server"

import { prisma } from "@/lib/prisma"
import { createSession } from "@/lib/session"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"
import z from "zod"

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email adress" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
})

const signUpSchema = z.object({
  fullName: z.string(),
  email: z.string().email({ message: "Invalid email adress" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
})

export async function signUp(prevState: any, formData: FormData) {
  const result = signUpSchema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  const { fullName, email, password, confirmPassword } = result.data

  if (!fullName || !email || !password || !confirmPassword) {
    throw new Error("Missing fields!")
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match!")
  }

  const exists = await prisma.user.findUnique({
    where: { email },
  })

  if (exists) {
    throw new Error("User already exists!")
  }

  const hashed = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashed,
    },
  })
  redirect("/denim")
}

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  const { email, password } = result.data

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) return { error: "Invalid email or email" }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) return { error: "Invalid email or email" }

  await createSession(user.id)

  redirect("/denim")
}
