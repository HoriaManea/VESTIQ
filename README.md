# VESTIQ

A full-stack e-commerce storefront built with Next.js (App Router), TypeScript, Prisma/PostgreSQL, Redis + BullMQ, and JWT-based authentication.

> ⚠️ **Portfolio project.** Checkout is a mock flow (no real payment processor is integrated), and a couple of forms (Contact, Coming Soon) are UI-only and not wired up to a backend yet. See [Known Limitations](#known-limitations) below.

## Features

- Product catalog with category pages (Denim / Bottoms / Shorts), search, and pagination
- Product detail pages with an image gallery
- Client-side cart (persisted to `localStorage`) with a slide-over cart sidebar
- Email/password authentication — signup & login, bcrypt-hashed passwords, JWT session cookies (`jose`)
- Route protection for shop pages via Next.js middleware
- Background job queue (BullMQ + Redis) that sends an order-confirmation email via Nodemailer after checkout
- First-visit promo popup, rewards program page, contact page

## Tech Stack

| Layer          | Tech                                               |
| -------------- | -------------------------------------------------- |
| Framework      | Next.js (App Router), React, TypeScript            |
| Styling / UI   | Tailwind CSS v4, shadcn/ui, Radix UI, lucide-react |
| Database / ORM | PostgreSQL, Prisma                                 |
| Auth           | bcryptjs (hashing), jose (JWT sessions)            |
| Validation     | Zod                                                |
| Queue / Email  | Redis, BullMQ, Nodemailer                          |

## Prerequisites

- Node.js 18.18+ (20 LTS recommended)
- A package manager: npm, pnpm, or yarn
- PostgreSQL (local install or Docker)
- Redis (local install or Docker)

## Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd vestiq
npm install
```

### 2. Start PostgreSQL and Redis

If you don't already have them running locally, the quickest option is Docker:

```bash
docker run --name vestiq-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=vestiq -p 5432:5432 -d postgres
docker run --name vestiq-redis -p 6379:6379 -d redis
```

### 3. Configure environment variables

Copy the example file and fill in your own values — **never commit `.env`**:

```bash
cp .env.example .env
```

| Variable         | Description                                                                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `DATABASE_URL`   | Postgres connection string, e.g. `postgresql://postgres:postgres@127.0.0.1:5432/vestiq`                                                       |
| `SESSION_SECRET` | Random secret used to sign JWT session cookies. Generate one with `openssl rand -base64 32`                                                   |
| `REDIS`          | Redis connection string, e.g. `redis://localhost:6379`                                                                                        |
| `SMTP_HOST`      | SMTP server host, e.g. `smtp.gmail.com`                                                                                                       |
| `SMTP_PORT`      | SMTP port, e.g. `587`                                                                                                                         |
| `SMTP_USER`      | SMTP account username / email                                                                                                                 |
| `SMTP_PASS`      | SMTP password. For Gmail, use an **App Password** (Google Account → Security → 2-Step Verification → App Passwords), not your normal password |
| `MAIL_FROM`      | "From" header for outgoing order emails, e.g. `Vestiq <you@example.com>`                                                                      |

Never reuse the values from an old commit or chat log — always generate fresh ones.

### 4. Set up the database

```bash
npx prisma migrate dev
npx prisma db seed
```

This creates the schema and seeds the `Product` table from `prisma/products.json`.

### 5. Add required static assets

The UI references a couple of images that aren't part of the source code — add your own (or placeholders) at:

- `public/coreImages/signUpPhoto.jpg`
- `public/avatars/shadcn.jpg`

### 6. Run the app

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### 7. Run the background worker (separate terminal)

Order-confirmation emails are sent asynchronously through a BullMQ worker, so it needs to run alongside the dev server:

```bash
npx tsx worker.ts
```

(If `tsx` isn't installed: `npm install -D tsx`.)

## Project Structure

```
app/                # Next.js App Router routes (denim, bottoms, shorts, login, signup, ...)
components/         # UI components (product cards, navbar, footer, forms, shadcn/ui primitives)
contexts/           # React context providers (cart, modal, notifications)
lib/                # Server-side utilities (prisma client, redis, session/JWT, mailer, cn helper)
prisma/             # Prisma schema, seed script, product seed data
types/              # Shared TypeScript types
worker.ts           # Standalone BullMQ worker that sends order-confirmation emails
middleware.ts        # Route protection (redirects unauthenticated users away from shop pages)
```

## Known Limitations

Being upfront about these — they're intentional scoping decisions for a portfolio project, not oversights:

- **Checkout is a demo flow.** No real payment processor (Stripe, etc.) is integrated, and the order total is currently trusted from the client rather than recalculated server-side from the database.
- **Contact and "Notify Me" forms are UI-only** — they don't currently submit anywhere.
- No rate limiting on login/signup.
- No test suite yet.

## License

MIT — feel free to use this as a reference for your own projects.
