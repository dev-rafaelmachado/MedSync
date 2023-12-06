import { FastifyInstance, FastifyRequest } from 'fastify'
import { GetDoctorController } from '../modules/doctor/useCases/GetDoctor/GetDoctorController'
import {
  GetDoctorByIdController,
  IGetDoctorByIdRequest,
} from '../modules/doctor/useCases/GetDoctorById/GetDoctorByIdController'
import {
  CreateDoctorController,
  ICreateDoctorRequest,
} from '../modules/doctor/useCases/createDoctor/CreateDoctorController'
import {
  DeleteDoctorController,
  IDeleteDoctorRequest,
} from '../modules/doctor/useCases/deleteDoctor/DeleteDoctorController'
import {
  ILoginDoctorRequest,
  LoginDoctorController,
} from '../modules/doctor/useCases/loginDoctor/LoginDoctorController'
import {
  IUpdateDoctorRequest,
  UpdateDoctorController,
} from '../modules/doctor/useCases/updateDoctor/UpdateDoctorController'

export default async function (fastify: FastifyInstance) {
  const createDoctorController = new CreateDoctorController()
  const updateDoctorController = new UpdateDoctorController()
  const getDoctorController = new GetDoctorController()
  const getDoctorByIdController = new GetDoctorByIdController()
  const deleteDoctorController = new DeleteDoctorController()
  const loginDoctorController = new LoginDoctorController()

  fastify.route({
    method: 'POST',
    url: '/v1/doctor',
    handler: (request: FastifyRequest<ICreateDoctorRequest>, reply) =>
      createDoctorController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/doctor',
    handler: (request: FastifyRequest, reply) =>
      getDoctorController.handle(request, reply),
  })

  fastify.route({
    method: 'GET',
    url: '/v1/doctor/:id',
    handler: (request: FastifyRequest<IGetDoctorByIdRequest>, reply) =>
      getDoctorByIdController.handle(request, reply),
  })

  fastify.route({
    method: 'PUT',
    url: '/v1/doctor/:id',
    handler: (request: FastifyRequest<IUpdateDoctorRequest>, reply) =>
      updateDoctorController.handle(request, reply),
  })

  fastify.route({
    method: 'DELETE',
    url: '/v1/doctor/:id',
    handler: (request: FastifyRequest<IDeleteDoctorRequest>, reply) =>
      deleteDoctorController.handle(request, reply),
  })

  fastify.route({
    method: 'POST',
    url: '/v1/doctor/login',
    handler: (request: FastifyRequest<ILoginDoctorRequest>, reply) =>
      loginDoctorController.handle(request, reply),
  })
}
