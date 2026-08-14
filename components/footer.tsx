"use client"

import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

const shopLinks = [
  { href: "/denim", label: "denim" },
  { href: "/bottoms", label: "bottoms" },
  { href: "/shorts", label: "shorts" },
]

const companyLinks = [
  { href: "/rewards", label: "rewards" },
  { href: "/coming-soon", label: "coming soon" },
  { href: "/contact", label: "contact" },
]

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <span className="text-lg font-semibold tracking-tight">
              VESTIQ<span className="text-white/60">.</span>
            </span>
            <p className="mt-4 max-w-[220px] text-sm text-white/60">
              Minimal, everyday essentials — designed to last, built to move
              with you.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs tracking-[0.2em] text-white/80">
              SHOP
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              {shopLinks.map((link) => (
                <li key={link.href} className="mt-1">
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs tracking-[0.2em] text-white/80">
              COMPANY
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              {companyLinks.map((link) => (
                <li key={link.href} className="mt-1">
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs tracking-[0.2em] text-white/80">
              GET IN TOUCH
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail size={14} strokeWidth={1.5} />
                <a href="mailto:help@vestiq.com" className="hover:text-white">
                  help@vestiq.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} strokeWidth={1.5} />
                Bucharest, Romania
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <div>© 2026 VESTIQ</div>
          <div className="tracking-widest uppercase">romania</div>
        </div>
      </div>
    </footer>
  )
}
