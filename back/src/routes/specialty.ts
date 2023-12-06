import { FastifyInstance, FastifyRequest } from 'fastify'
import {
  CreateSpecialtyController,
  ICreateSpecialtyRequest,
} from '../modules/specialty/useCases/createSpecialty/CreateSpecialtyController'
import {
  DeleteSpecialtyController,
  IDeleteSpecialtyRequest,
} from '../modules/specialty/useCases/deleteSpecialty/DeleteSpecialtyController'
import { GetSpecialtyController } from '../modules/specialty/useCases/getSpecialty/GetSpecialtyController'
import {
  GetSpecialtyByIdController,
  IGetSpecialtyRequest,
} from '../modules/specialty/useCases/getSpecialtyById/GetSpecialtyByIdController'

export default async function (fastify: FastifyInstance) {
  const createSpecialtyController = new CreateSpecialtyController()
  const deleteSpecialtyController = new DeleteSpecialtyController()
  const getSpecialtyController = new GetSpecialtyController()
  const getSpecialtyByIdController = new GetSpecialtyByIdController()

  fastify.route({
    method: 'POST',
    url: '/v1/specialty',
    handler: (request: FastifyRequest<ICreateSpecialtyRequest>, reply) =>
      createSpecialtyController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/specialty',
    handler: (request: FastifyRequest, reply) =>
      getSpecialtyController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/specialty/:id',
    handler: (request: FastifyRequest<IGetSpecialtyRequest>, reply) =>
      getSpecialtyByIdController.handle(request, reply),
  })

  fastify.route({
    method: 'DELETE',
    url: '/v1/specialty/:id',
    handler: (request: FastifyRequest<IDeleteSpecialtyRequest>, reply) =>
      deleteSpecialtyController.handle(request, reply),
  })
}
