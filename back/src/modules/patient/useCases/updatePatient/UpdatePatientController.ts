import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { UpdatePatientUseCase } from './UpdatePatientUseCase'

export interface IUpdatePatientRequest extends RouteGenericInterface {
  Body: {
    name: string
    email: string
    password: string
    cpf: string
    phone: string
    birthDate: Date
  }
  Params: {
    id: string
  }
}

export class UpdatePatientController {
  async handle(
    request: FastifyRequest<IUpdatePatientRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, password, cpf, phone, birthDate } = request.body
    const { id } = request.params

    const patientData = {
      name,
      email,
      password,
      cpf,
      phone,
      birthDate,
    }

    const updatePatientUseCase = container.resolve(UpdatePatientUseCase)
    const patient = await updatePatientUseCase.execute(id, patientData)

    return reply.status(200).send(patient)
  }
}
