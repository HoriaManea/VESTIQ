import { Redis } from "ioredis"

declare global {
  var redisConnection: Redis | undefined
}

const connection =
  global.redisConnection ??
  new Redis(process.env.REDIS!, { maxRetriesPerRequest: null })

if (process.env.NODE_ENV !== "production") {
  global.redisConnection = connection
}

export default connection
