import "dotenv/config"
import { Worker } from "bullmq"
import connection from "./lib/redis"
import { transporter } from "./lib/mailer"
import { OrderEmailJob } from "./types/order"

const worker = new Worker<OrderEmailJob>(
  "order-emails",
  async (job) => {
    const { email, products, total } = job.data

    const productsHtml = products
      .map(
        (p) => `
        <tr>
          <td style="padding:8px 0;">${p.productName}</td>
          <td style="padding:8px 0; text-align:right;">${p.price} RON</td>
        </tr>`
      )
      .join("")

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Comanda ta a fost plasata",
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <h2>Multumim pentru comanda!</h2>
          <table style="width:100%; border-collapse:collapse;">
            ${productsHtml}
          </table>
          <p style="margin-top:16px; font-weight:bold;">
            Total: ${total.toFixed(2)} RON
          </p>
        </div>
      `,
    })

    console.log(`Email trimis catre ${email}`)
  },
  { connection }
)

worker.on("completed", (job) => console.log(`Job ${job.id} completat`))
worker.on("failed", (job, err) =>
  console.error(`Job ${job?.id} esuat:`, err.message)
)

console.log("Worker pornit, astept joburi...")
