"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { createPortal } from "react-dom"

const NotificationContext = createContext(undefined)

export default function NotificationProvider({
  children,
}: {
  children: ReactNode
}) {
  const [showNotification, setShowNotification] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
   const dimissed = localStorage.getItem("showNotification");

    if(!dimissed) {
      setShowNotification(true)
    }


    setMounted(true)
  }, [])

 

  function handleCloseNotification() {
    setShowNotification(false);
    localStorage.setItem("showNotification", "true")
  }

  return (
    <NotificationContext.Provider value={undefined}>
      {children}

      {mounted &&
        createPortal(
          showNotification ? (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
              <div className="relative w-full max-w-[430px] bg-black px-6 py-8 text-white">
                <button
                  onClick={handleCloseNotification}
                  className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-black transition hover:bg-black hover:text-white"
                  aria-label="Close"
                >
                  <span className="text-2xl leading-none font-light">×</span>
                </button>

                <div className="mb-7 text-center">
                  <p className="mb-6 text-sm tracking-[0.45em]">MNML</p>

                  <p className="mb-2 text-xs font-medium tracking-wide">
                    WELCOME TO MNML
                  </p>

                  <h2 className="text-4xl font-bold tracking-tight">
                    GET 10% OFF
                  </h2>

                  <p className="mt-2 text-sm text-white/80">YOUR FIRST ORDER</p>
                </div>

                <p className="mb-5 text-center text-xs leading-5 text-white/70">
                  Sign up and get 10% off your first purchase.
                </p>

                <input
                  type="email"
                  placeholder="Email"
                  className="mb-4 h-12 w-full border border-white bg-white px-4 text-sm text-black outline-none placeholder:text-gray-500 focus:border-gray-400"
                />

                <button className="h-12 w-full bg-white text-sm tracking-[0.2em] text-black transition hover:bg-gray-200">
                  GET MY DISCOUNT
                </button>

                <button
                  onClick={handleCloseNotification}
                  className="mt-2 h-12 w-full border border-white text-sm tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
                >
                  NO THANKS
                </button>

                <p className="mt-5 text-[9px] leading-3 text-white/50">
                  By subscribing, you agree to receive marketing emails. You can
                  unsubscribe at any time. By continuing, you agree to our
                  Privacy Policy and Terms.
                </p>
              </div>
            </div>
          ) : null,
          document.body
        )}
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    )
  }
  return context
}
