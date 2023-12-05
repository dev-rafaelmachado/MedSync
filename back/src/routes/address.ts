import { FastifyInstance, FastifyRequest } from 'fastify'
import {
  CreateAddressController,
  ICreateAddressRequest,
} from '../modules/address/useCases/createAddress/CreateAddressController'
import {
  GetAddressByIdController,
  IGetAddressByIdRequest,
} from '../modules/address/useCases/getAddressById/GetAddressByIdController'
import { GetAddressController } from '../modules/address/useCases/getAddress/GetAddressController'
import {
  DeleteAddressController,
  IDeleteAddressByIdRequest,
} from '../modules/address/useCases/deleteAddress/DeleteAddressController'
import {
  IUpdateAddressRequest,
  UpdateAddressController,
} from '../modules/address/useCases/updateAddress/UpdateAddressController'

export default async function (fastify: FastifyInstance) {
  const createAddressController = new CreateAddressController()
  const getAddressByIdController = new GetAddressByIdController()
  const getAddressController = new GetAddressController()
  const updateAddressController = new UpdateAddressController()
  const deleteAddressController = new DeleteAddressController()

  fastify.route({
    method: 'POST',
    url: '/v1/address',
    handler: (request: FastifyRequest<ICreateAddressRequest>, reply) =>
      createAddressController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/address/:id',
    handler: (request: FastifyRequest<IGetAddressByIdRequest>, reply) =>
      getAddressByIdController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/address',
    handler: (request: FastifyRequest, reply) =>
      getAddressController.handle(request, reply),
  })

  fastify.route({
    method: 'PUT',
    url: '/v1/address/:id',
    handler: (request: FastifyRequest<IUpdateAddressRequest>, reply) =>
      updateAddressController.handle(request, reply),
  })

  fastify.route({
    method: 'DELETE',
    url: '/v1/address/:id',
    handler: (request: FastifyRequest<IDeleteAddressByIdRequest>, reply) =>
      deleteAddressController.handle(request, reply),
  })
}
