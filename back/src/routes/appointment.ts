import { IGetAppointmentByIdRequest } from './../modules/appointment/useCases/getAppointmentById/GetAppointmentByIdController'
import { FastifyInstance, FastifyRequest } from 'fastify'
import {
  DeleteAppointmentController,
  IDeleteAppointmentRequest,
} from '../modules/appointment/useCases/deleteAppointment/DeleteAppointmentController'
import {
  GetAppointmentController,
  IGetAppointmentRequest,
} from '../modules/appointment/useCases/getAppointment/GetAppointmentController'
import { GetAppointmentByIdController } from '../modules/appointment/useCases/getAppointmentById/GetAppointmentByIdController'
import {
  CreateAppointmentController,
  ICreateAppointmentRequest,
} from './../modules/appointment/useCases/createAppointment/CreateAppointmentController'

export default async function (fastify: FastifyInstance) {
  const createAppointmentController = new CreateAppointmentController()
  const getAppointmentController = new GetAppointmentController()
  const getAppointmentByIdController = new GetAppointmentByIdController()
  const deleteAppointmentController = new DeleteAppointmentController()

  fastify.route({
    method: 'POST',
    url: '/v1/appointment',
    handler: (request: FastifyRequest<ICreateAppointmentRequest>, reply) =>
      createAppointmentController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/appointment',
    handler: (request: FastifyRequest<IGetAppointmentRequest>, reply) =>
      getAppointmentController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/appointment/:id',
    handler: (request: FastifyRequest<IGetAppointmentByIdRequest>, reply) =>
      getAppointmentByIdController.handle(request, reply),
  })

  fastify.route({
    method: 'DELETE',
    url: '/v1/appointment/:id',
    handler: (request: FastifyRequest<IDeleteAppointmentRequest>, reply) =>
      deleteAppointmentController.handle(request, reply),
  })
}
