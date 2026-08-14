"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { CartProduct, SidebarContextType } from "@/types/cart"

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export default function CartProvider({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false)

  const [mount, setMount] = useState<boolean>(false)

  const cartProductsCount = cartProducts.length

  const cartAllPrices = cartProducts.map((el) => el.price)

  const totalPrice = cartAllPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  useEffect(() => {
    setMount(true)

    const stored = localStorage.getItem("cartProducts")

    if (stored) {
      setCartProducts(JSON.parse(stored))
    }
  }, [])

  function handleShowSidebar() {
    setShowSidebar((prev) => !prev)
  }

  function handleAddToCart(product: CartProduct) {
    setCartProducts((prev) => [...prev, product])
  }

  function handleClearCart() {
    setCartProducts([])
    localStorage.removeItem("cartProducts")
  }

  async function handleCheckout() {
    if (cartProducts.length === 0) return

    setIsCheckingOut(true)

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          products: cartProducts,
          total: totalPrice,
        }),
      })

      if (res.status === 401) {
        alert("Trebuie sa fii logat pentru a plasa o comanda")
        return
      }

      if (!res.ok) throw new Error("Checkout a esuat")

      handleClearCart()
      setShowSidebar(false)
      alert("Comanda a fost plasata! Vei primi un email de confirmare.")
    } catch (err) {
      console.error(err)
      alert("A aparut o eroare la plasarea comenzii.")
    } finally {
      setIsCheckingOut(false)
    }
  }

  useEffect(() => {
    if (!mount) return

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
  }, [cartProducts, mount])

  return (
    <SidebarContext.Provider
      value={{
        handleShowSidebar,
        handleAddToCart,
        handleCheckout,
        cartProducts,
        cartProductsCount,
        isCheckingOut,
      }}
    >
      {children}

      {mount &&
        createPortal(
          showSidebar ? (
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black/20"
                onClick={handleShowSidebar}
              />

              <aside className="absolute top-0 right-0 flex h-full w-[425px] flex-col bg-white text-black">
                <div className="flex h-[60px] shrink-0 items-center px-5">
                  <button
                    onClick={handleShowSidebar}
                    className="mr-3 cursor-pointer"
                  >
                    <X size={22} strokeWidth={1.5} />
                  </button>

                  <h2 className="text-[20px] font-normal">
                    BAG ({cartProducts.length})
                  </h2>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-5">
                  {cartProducts.map((product, index) => (
                    <div
                      key={`${product.productName}-${index}`}
                      className="flex gap-5"
                    >
                      <div className="h-[150px] w-[100px] shrink-0 bg-neutral-100">
                        <img
                          src={product.image}
                          alt={`public${product.image}`}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex justify-between gap-4">
                          <div>
                            <h3 className="text-[14px] font-normal tracking-wide uppercase">
                              {product.productName}
                            </h3>

                            <p className="mt-1 text-[13px] text-neutral-500">
                              off white
                            </p>

                            <p className="mt-1 text-[13px] text-neutral-500 uppercase">
                              xs
                            </p>
                          </div>

                          <p className="text-[13px] whitespace-nowrap">
                            {product.price} RON
                          </p>
                        </div>

                        <button className="mt-auto w-fit cursor-pointer border-b border-neutral-500 pb-[2px] text-[12px] text-neutral-500">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="shrink-0 border-t border-neutral-200 px-5 py-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px]">Products Count</span>
                    <span className="text-[13px]">{cartProductsCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px]">Subtotal</span>
                    <span className="text-[13px]">{totalPrice} RON</span>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[13px] text-neutral-500">
                      Shipping
                    </span>

                    <span className="text-[13px] text-neutral-500">
                      Calculated at checkout
                    </span>
                  </div>

                  <div className="mt-4 border-t border-neutral-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-medium">Total</span>

                      <span className="text-[14px] font-medium">
                        {totalPrice} RON
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut || cartProducts.length === 0}
                    className="mt-5 h-[50px] w-full cursor-pointer bg-black text-[13px] tracking-wide text-white uppercase transition-opacity hover:opacity-80 disabled:opacity-50"
                  >
                    {isCheckingOut ? "Se trimite..." : "Checkout"}
                  </button>

                  <p className="mt-3 text-center text-[11px] text-neutral-500">
                    Taxes included. Shipping calculated at checkout.
                  </p>
                </div>
              </aside>
            </div>
          ) : null,
          document.body
        )}
    </SidebarContext.Provider>
  )
}

export function useCart() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
