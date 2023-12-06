import { FastifyInstance, FastifyRequest } from 'fastify'
import {
  CreateRequestController,
  ICreateRequestRequest,
} from '../modules/requests/useCases/createRequest/CreateRequestController'
import {
  DeleteRequestController,
  IDeleteRequestRequest,
} from '../modules/requests/useCases/deleteRequest/DeleteRequestController'
import {
  GetRequestByIdController,
  IGetRequestByIdRequest,
} from '../modules/requests/useCases/getRequestById/GetRequestByIdController'
import {
  GetRequestController,
  IGetRequestRequest,
} from '../modules/requests/useCases/getRequests/GetRequestController'

export default async function (fastify: FastifyInstance) {
  const createRequestController = new CreateRequestController()
  const deleteRequestController = new DeleteRequestController()
  const getRequestController = new GetRequestController()
  const getRequestByIdController = new GetRequestByIdController()

  fastify.route({
    method: 'POST',
    url: '/v1/request',
    handler: (request: FastifyRequest<ICreateRequestRequest>, reply) =>
      createRequestController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/request',
    handler: (request: FastifyRequest<IGetRequestRequest>, reply) =>
      getRequestController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/request/:id',
    handler: (request: FastifyRequest<IGetRequestByIdRequest>, reply) =>
      getRequestByIdController.handle(request, reply),
  })

  fastify.route({
    method: 'DELETE',
    url: '/v1/request/:id',
    handler: (request: FastifyRequest<IDeleteRequestRequest>, reply) =>
      deleteRequestController.handle(request, reply),
  })
}
