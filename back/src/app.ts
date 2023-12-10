import fastify from 'fastify'
import cors from '@fastify/cors'
import routes from './routes'

async function start() {
  const app = fastify()

  // Registrar as rotas
  app.register(routes)

  // add cors
  app.register(cors, {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'adminid'],
  })

  // Iniciar o servidor
  app.listen({ port: 3333, host: 'localhost' }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`🚀🚀🚀 Server listening at ${address}`)
  })
}

export default start
