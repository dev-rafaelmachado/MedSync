import { FastifyInstance } from 'fastify'
import address from './address'
import admin from './admin'
import doctor from './doctor'
import specialty from './specialty'
import patient from './patient'
import request from './request'
import appointment from './appointment'

export default async function (fastify: FastifyInstance) {
  address(fastify)
  admin(fastify)
  doctor(fastify)
  patient(fastify)
  specialty(fastify)
  request(fastify)
  appointment(fastify)
}
