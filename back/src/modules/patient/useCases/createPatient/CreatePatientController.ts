import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { CreatePatientUseCase } from './CreatePatientUseCase'

export interface ICreatePatientRequest extends RouteGenericInterface {
  Body: {
    name: string
    email: string
    password: string
    cpf: string
    phone: string
    birthDate: Date
  }
}
export class CreatePatientController {
  async handle(
    request: FastifyRequest<ICreatePatientRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, password, cpf, phone, birthDate } = request.body

    const patientData = {
      name,
      email,
      password,
      cpf,
      phone,
      birthDate,
    }

    const createPatientUseCase = container.resolve(CreatePatientUseCase)
    const patient = await createPatientUseCase.execute(patientData)

    return reply.status(201).send(patient)
  }
}
