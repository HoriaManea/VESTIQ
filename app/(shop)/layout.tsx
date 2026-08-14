import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"
import NotificationProvider from "@/contexts/notification-context"

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <NotificationProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </NotificationProvider>
      <Footer />
    </>
  )
}
