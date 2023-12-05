import { FastifyInstance } from 'fastify'
import address from './address'

export default async function (fastify: FastifyInstance) {
  address(fastify)
}
