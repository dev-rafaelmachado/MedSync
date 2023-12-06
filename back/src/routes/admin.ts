import { FastifyInstance, FastifyRequest } from 'fastify'
import {
  CreateAdminController,
  ICreateAdminRequest,
} from '../modules/admin/useCases/createAdmin/CreateAdminController'
import {
  IUpdateAdminRequest,
  UpdateAdminController,
} from '../modules/admin/useCases/updateAdmin/UpdateAdminController'
import {
  DeleteAdminController,
  IDeleteAdminRequest,
} from '../modules/admin/useCases/deleteAdmin/DeleteAdminController'
import {
  ILoginAdminRequest,
  LoginAdminController,
} from '../modules/admin/useCases/loginAdmin/LoginAdminController'

export default async function (fastify: FastifyInstance) {
  const createAdminController = new CreateAdminController()
  const updateAdminController = new UpdateAdminController()
  const deleteAdminController = new DeleteAdminController()
  const loginAdminController = new LoginAdminController()

  fastify.route({
    method: 'POST',
    url: '/v1/admin',
    handler: (request: FastifyRequest<ICreateAdminRequest>, reply) =>
      createAdminController.handle(request, reply),
  })

  fastify.route({
    method: 'PUT',
    url: '/v1/admin/:id',
    handler: (request: FastifyRequest<IUpdateAdminRequest>, reply) =>
      updateAdminController.handle(request, reply),
  })

  fastify.route({
    method: 'DELETE',
    url: '/v1/admin/:id',
    handler: (request: FastifyRequest<IDeleteAdminRequest>, reply) =>
      deleteAdminController.handle(request, reply),
  })

  fastify.route({
    method: 'POST',
    url: '/v1/admin/login',
    handler: (request: FastifyRequest<ILoginAdminRequest>, reply) =>
      loginAdminController.handle(request, reply),
  })
}
