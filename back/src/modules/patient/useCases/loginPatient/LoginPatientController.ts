import { RouteGenericInterface, FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { LoginPatientUseCase } from './LoginPatientUseCase'

export interface ILoginPatientRequest extends RouteGenericInterface {
  Body: {
    email: string
    password: string
  }
}

export class LoginPatientController {
  async handle(
    request: FastifyRequest<ILoginPatientRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { email, password } = request.body

    const loginPatientUseCase = container.resolve(LoginPatientUseCase)
    const patient = await loginPatientUseCase.execute(email, password)

    return reply.status(200).send(patient)
  }
}
