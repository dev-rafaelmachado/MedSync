import { RouteGenericInterface, FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { CreateDoctorUseCase } from './CreateDoctorUseCase'

export interface ICreateDoctorRequest extends RouteGenericInterface {
  Body: {
    name: string
    email: string
    password: string
    crm: string
    specialtiesId: string
    addressId: string
  }
}
export class CreateDoctorController {
  async handle(
    request: FastifyRequest<ICreateDoctorRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, password, crm, specialtiesId, addressId } =
      request.body

    const doctorData = {
      name,
      email,
      password,
      crm,
      specialtiesId,
      addressId,
    }

    const createDoctorUseCase = container.resolve(CreateDoctorUseCase)
    const doctor = await createDoctorUseCase.execute(doctorData)

    return reply.status(201).send(doctor)
  }
}
