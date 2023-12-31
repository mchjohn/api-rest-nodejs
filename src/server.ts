import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'

import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, { prefix: 'transactions' })

app
  .listen({
    port: Number(env.PORT),
  })
  .then(() => {
    console.log(`🚀 HTTP Server is Running on PORT ${env.PORT}!`)
  })
