import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-6 text-center">
      <span className="text-xs tracking-[0.35em] text-muted-foreground">
        VESTIQ
      </span>

      <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
        COMING SOON
      </h1>

      <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
        New arrivals are on their way. Sign up and be the first to know when
        they drop.
      </p>

      <div className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
        <Input type="email" placeholder="Email address" className="h-12" />
        <Button type="button" className="h-12 shrink-0 tracking-wide uppercase">
          Notify Me
        </Button>
      </div>
    </div>
  )
}
