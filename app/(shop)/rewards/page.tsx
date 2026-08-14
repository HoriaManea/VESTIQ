import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "MEMBER",
    threshold: "0+ points",
    perks: [
      "Earn 1 point per every 1 RON spent",
      "Birthday reward",
      "Early access to sale",
    ],
  },
  {
    name: "INSIDER",
    threshold: "500+ points",
    perks: [
      "All Member perks",
      "Free standard shipping",
      "Access to insider drops",
    ],
  },
  {
    name: "ICON",
    threshold: "1500+ points",
    perks: [
      "All Insider perks",
      "Free returns & exchanges",
      "Invitations to VESTIQ events",
    ],
  },
]

const steps = [
  {
    number: "01",
    title: "Create an account",
    description: "Sign up in seconds to start earning on every order.",
  },
  {
    number: "02",
    title: "Earn points",
    description: "Collect points automatically with every purchase.",
  },
  {
    number: "03",
    title: "Redeem rewards",
    description: "Turn points into discounts, early access, and perks.",
  },
]

export default function RewardsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-20 pb-32">
      <div className="max-w-xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          VESTIQ REWARDS
        </h1>
        <p className="mt-6 text-sm leading-6 text-muted-foreground">
          Earn points, unlock perks, and get more from every order. The more you
          shop, the more you get.
        </p>
      </div>

      <div className="mt-24 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.name} className="gap-6">
            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                {tier.threshold}
              </Badge>
              <CardTitle className="mt-3 text-lg tracking-wide">
                {tier.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="text-foreground">—</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How it works */}
      <div className="mt-24">
        <h2 className="text-xs tracking-[0.2em] text-muted-foreground">
          HOW IT WORKS
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm text-muted-foreground">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-medium">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
