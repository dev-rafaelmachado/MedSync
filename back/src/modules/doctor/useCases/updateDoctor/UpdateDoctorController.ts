import { RouteGenericInterface, FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { UpdateDoctorUseCase } from './UpdateDoctorUseCase'

export interface IUpdateDoctorRequest extends RouteGenericInterface {
  Body: {
    name: string
    email: string
    password: string
    crm: string
    specialtiesId: string
    addressId: string
  }
  Params: {
    id: string
  }
}

export class UpdateDoctorController {
  async handle(
    request: FastifyRequest<IUpdateDoctorRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, password, crm, specialtiesId, addressId } =
      request.body
    const { id } = request.params

    const doctorData = {
      name,
      email,
      password,
      crm,
      specialtiesId,
      addressId,
    }

    const updateDoctorUseCase = container.resolve(UpdateDoctorUseCase)
    const doctor = await updateDoctorUseCase.execute(id, doctorData)

    return reply.status(201).send(doctor)
  }
}
