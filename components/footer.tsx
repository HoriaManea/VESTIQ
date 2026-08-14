"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="gap-12`">
            <h3 className="mb-4 text-xs tracking-[0.2em] text-white/80">
              SHOP
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <Link href={"/denim"}>
                <li className="mt-1">denim</li>
              </Link>

              <Link href={"/bottoms"}>
                <li className="mt-1">bottoms</li>
              </Link>

              <Link href={"/shorts"}>
                <li className="mt-1"> shorts</li>
              </Link>

              <Link href={"/coming-soon"}>
                <li className="mt-1">coming soon</li>
              </Link>

              <Link href={"/rewards"}>
                <li className="mt-1">rewards</li>
              </Link>

              <Link href={"/contact"}>
                <li className="mt-1">contact</li>
              </Link>
            </ul>
          </div>

          <div className="gap-12`">
            <h3 className="mb-4 text-xs tracking-[0.2em] text-white/80">
              HELP
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <Link href={"/denim"}>
                <li className="mt-1">denim</li>
              </Link>

              <Link href={"/bottoms"}>
                <li className="mt-1">bottoms</li>
              </Link>

              <Link href={"/shorts"}>
                <li className="mt-1"> shorts</li>
              </Link>

              <Link href={"/coming-soon"}>
                <li className="mt-1">coming soon</li>
              </Link>

              <Link href={"/rewards"}>
                <li className="mt-1">rewards</li>
              </Link>

              <Link href={"/contact"}>
                <li className="mt-1">contact</li>
              </Link>
            </ul>
          </div>

          <div className="gap-12`">
            <h3 className="mb-4 text-xs tracking-[0.2em] text-white/80">
              INFO
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <Link href={"/denim"}>
                <li className="mt-1">denim</li>
              </Link>

              <Link href={"/bottoms"}>
                <li className="mt-1">bottoms</li>
              </Link>

              <Link href={"/shorts"}>
                <li className="mt-1"> shorts</li>
              </Link>

              <Link href={"/coming-soon"}>
                <li className="mt-1">coming soon</li>
              </Link>

              <Link href={"/rewards"}>
                <li className="mt-1">rewards</li>
              </Link>

              <Link href={"/contact"}>
                <li className="mt-1">contact</li>
              </Link>
            </ul>
          </div>

          <div>
            <div className="mt-6 flex gap-4 text-white/70"></div>
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
