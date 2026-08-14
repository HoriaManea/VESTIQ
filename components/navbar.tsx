"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useCart } from "@/contexts/cart-contex"
import { User, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const { handleShowSidebar, cartProductsCount } = useCart()

  return (
    <div className="align-center mt-3 flex flex-row items-center justify-between pr-6 pl-6">
      <Link href={"denim"}>
        <span className="flex items-center gap-1 text-xl font-semibold tracking-tight">
          VESTIQ<span className="text-primary">.</span>
        </span>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>SHOP</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4">
                <NavigationMenuLink
                  className="block rounded-md p-2 hover:bg-muted"
                  href="denim"
                >
                  DENIM
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="block rounded-md p-2 hover:bg-muted"
                  href="bottoms"
                >
                  BOTTOMS
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="block rounded-md p-2 hover:bg-muted"
                  href="shorts"
                >
                  SHORTS
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="block px-3 py-2" href="rewards">
              REWARDS
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="block px-3 py-2" href="coming-soon">
              COMING SOON
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="block px-3 py-2" href="contact">
              CONTACT
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="relative flex flex-row gap-4">
        {cartProductsCount ? (
          <div className="color-white absolute top-[-12] right-7 w-5 rounded-full border bg-red-500 text-center text-xs">
            {cartProductsCount}
          </div>
        ) : (
          ""
        )}

        <ShoppingCart
          className="cursor-pointer"
          onClick={handleShowSidebar}
          size={25}
          strokeWidth={1}
        />

        <Link href={"user"}>
          <User size={25} strokeWidth={1} />
        </Link>
      </div>
    </div>
  )
}
