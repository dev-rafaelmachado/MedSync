import { FastifyRequest, FastifyReply, RouteGenericInterface } from 'fastify'
import { container } from 'tsyringe'
import { CreateAddressUseCase } from './CreateAddressUseCase'
import { ICreateAddressDTO } from '../../dto/ICreateAddressDTO'

export interface ICreateAddressRequest extends RouteGenericInterface {
  Body: {
    zipCode: string
    street: string
    number: string
    city: string
    state: string
  }
}

export class CreateAddressController {
  async handle(
    request: FastifyRequest<ICreateAddressRequest>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { zipCode, street, number, city, state } = request.body

    const address: ICreateAddressDTO = {
      zipCode,
      street,
      number,
      city,
      state,
    }

    const createAddressUseCase = container.resolve(CreateAddressUseCase)

    const res = await createAddressUseCase.execute(address)

    return reply.status(201).send(res)
  }
}
