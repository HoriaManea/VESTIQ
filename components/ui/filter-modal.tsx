"use client"

import { filter } from "@/actions/actions"
import { useModal } from "@/contexts/modal-context"

export default function FilterModal() {
  const { isOpen, closeModal } = useModal()

  if (!isOpen) return null

  return (
    <form
      action={filter}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div className="w-[400px] space-y-4 rounded-xl bg-white p-6">
        <h2 className="text-lg font-bold">Filter & Sort</h2>

        <div>
          <label className="text-sm font-medium">Category</label>
          <select className="mt-1 w-full rounded border p-2" name="category">
            <option value="">All</option>
            <option value="pants">Pants</option>
            <option value="tshirts">T-Shirts</option>
            <option value="hoodies">Hoodies</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Size</label>
          <select className="mt-1 w-full rounded border p-2" name="size">
            <option value="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Sort</label>
          <select className="mt-1 w-full rounded border p-2" name="sort">
            <option value="">Default</option>
            <option value="price_asc">Price ↑</option>
            <option value="price_desc">Price ↓</option>
          </select>
        </div>

        <button
          type="button"
          onClick={closeModal}
          className="mt-2 w-full rounded bg-black px-4 py-2 text-white"
        >
          Close
        </button>
        <button className="mt-2 w-full rounded bg-black px-4 py-2 text-white">
          Filter
        </button>
      </div>
    </form>
  )
}
