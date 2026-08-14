"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xs tracking-[0.2em] text-white/80">
              SHOP
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>new</li>
              <li>denim</li>
              <li>bottoms</li>
              <li>tops</li>
              <li>outerwear</li>
              <li>accessories</li>
              <li>every day basics</li>
              <li>sale</li>
              <li>coming soon</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs tracking-[0.2em] text-white/80">
              HELP
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>contact us</li>
              <li>track order</li>
              <li>help center</li>
              <li>shipping</li>
              <li>returns + exchanges</li>
              <li>accessibility</li>
              <li>cookies settings</li>
              <li>terms of sale</li>
              <li>terms of use</li>
              <li>privacy policy</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs tracking-[0.2em] text-white/80">
              INFO
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>our story</li>
              <li>the edit</li>
              <li>careers</li>
              <li>rewards</li>
              <li>creator program</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs tracking-[0.2em] text-white/80">
              NEWSLETTER
            </h3>
            <p className="mb-4 text-sm text-white/60">
              Sign up to our newsletter to get updates.
            </p>

            <div className="flex gap-2">
              <Input
                placeholder="email"
                className="border-white/20 bg-transparent text-white placeholder:text-white/40"
              />
              <Button variant="outline" className="text-black">
                submit
              </Button>
            </div>

            <div className="mt-6 flex gap-4 text-white/70"></div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <div>© 2026 mnl</div>
          <div className="tracking-widest uppercase">romania</div>
        </div>
      </div>
    </footer>
  )
}
