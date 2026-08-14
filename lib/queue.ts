import { Queue } from "bullmq"
import connection from "./redis"

declare global {
  var orderEmailQueue: Queue | undefined
}

export const orderEmailQueue =
  global.orderEmailQueue ?? new Queue("order-emails", { connection })

if (process.env.NODE_ENV !== "production") {
  global.orderEmailQueue = orderEmailQueue
}
