import { FastifyInstance, FastifyRequest } from 'fastify'
import { GetPatientController } from '../modules/patient/useCases/GetPatient/GetPatientController'
import {
  CreatePatientController,
  ICreatePatientRequest,
} from '../modules/patient/useCases/createPatient/CreatePatientController'
import {
  DeletePatientController,
  IDeletePatientRequest,
} from '../modules/patient/useCases/deletePatient/DeletePatientController'
import {
  GetPatientByIdController,
  IGetPatientByIdRequest,
} from '../modules/patient/useCases/getPatientById/GetPatientByIdController'
import {
  ILoginPatientRequest,
  LoginPatientController,
} from '../modules/patient/useCases/loginPatient/LoginPatientController'
import {
  IUpdatePatientRequest,
  UpdatePatientController,
} from '../modules/patient/useCases/updatePatient/UpdatePatientController'

export default async function (fastify: FastifyInstance) {
  const createPatientController = new CreatePatientController()
  const updatePatientController = new UpdatePatientController()
  const deletePatientController = new DeletePatientController()
  const getPatientController = new GetPatientController()
  const getPatientByIdController = new GetPatientByIdController()
  const loginPatientController = new LoginPatientController()

  fastify.route({
    method: 'POST',
    url: '/v1/patient',
    handler: (request: FastifyRequest<ICreatePatientRequest>, reply) =>
      createPatientController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/patient',
    handler: (request: FastifyRequest, reply) =>
      getPatientController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/patient/:id',
    handler: (request: FastifyRequest<IGetPatientByIdRequest>, reply) =>
      getPatientByIdController.handle(request, reply),
  })

  fastify.route({
    method: 'PUT',
    url: '/v1/patient/:id',
    handler: (request: FastifyRequest<IUpdatePatientRequest>, reply) =>
      updatePatientController.handle(request, reply),
  })

  fastify.route({
    method: 'DELETE',
    url: '/v1/patient/:id',
    handler: (request: FastifyRequest<IDeletePatientRequest>, reply) =>
      deletePatientController.handle(request, reply),
  })

  fastify.route({
    method: 'POST',
    url: '/v1/patient/login',
    handler: (request: FastifyRequest<ILoginPatientRequest>, reply) =>
      loginPatientController.handle(request, reply),
  })
}
