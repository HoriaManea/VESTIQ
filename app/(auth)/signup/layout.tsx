import { ModalProvider } from "@/contexts/modal-context"

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ModalProvider>{children}</ModalProvider>
}
