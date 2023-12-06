import { RouteGenericInterface, FastifyRequest, FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { LoginDoctorUseCase } from './LoginDoctorUseCase'

export interface ILoginDoctorRequest extends RouteGenericInterface {
  Body: {
    email: string
    password: string
  }
}

export class LoginDoctorController {
  async handle(
    request: FastifyRequest<ILoginDoctorRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { email, password } = request.body

    const loginDoctorUseCase = container.resolve(LoginDoctorUseCase)
    const doctor = await loginDoctorUseCase.execute(email, password)

    return reply.status(200).send(doctor)
  }
}
