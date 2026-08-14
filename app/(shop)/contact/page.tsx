import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Mail, Clock, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-20 pb-32">
      <div className="max-w-xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          CONTACT US
        </h1>
        <p className="mt-6 text-sm leading-6 text-muted-foreground">
          The team at VESTIQ is committed to providing quality customer service.
          If you have any questions, concerns, or feedback, reach out below and
          we&apos;ll get back to you shortly.
        </p>
      </div>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        {/* Info column */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-xs tracking-[0.2em] text-muted-foreground">
              EMAIL
            </h2>
            <p className="mt-3 flex items-center gap-2 text-sm">
              <Mail size={16} strokeWidth={1.5} />
              help@vestiq.com
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.2em] text-muted-foreground">
              HOURS
            </h2>
            <p className="mt-3 flex items-center gap-2 text-sm">
              <Clock size={16} strokeWidth={1.5} />
              10am – 6pm PST, Monday–Friday
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.2em] text-muted-foreground">
              STUDIO
            </h2>
            <p className="mt-3 flex items-center gap-2 text-sm">
              <MapPin size={16} strokeWidth={1.5} />
              Bucharest, Romania
            </p>
          </div>
        </div>

        {/* Contact form — UI only, not wired up to any submit logic */}
        <div className="flex flex-col gap-5">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" placeholder="Jane Doe" />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="m@example.com" />
            </Field>

            <Field>
              <FieldLabel htmlFor="subject">Subject</FieldLabel>
              <Input id="subject" placeholder="Order, sizing, returns..." />
            </Field>

            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <textarea
                id="message"
                placeholder="How can we help?"
                rows={5}
                className="w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20"
              />
            </Field>

            <Button type="button" className="mt-2 h-12 tracking-wide uppercase">
              Send Message
            </Button>
          </FieldGroup>
        </div>
      </div>
    </div>
  )
}
