import { inject, injectable } from 'tsyringe'
import { IGetDoctorById } from '../../dto/IGetDoctorById'
import { IDoctorRepository } from '../../infra/IDoctorRepository'

@injectable()
export class GetDoctorByIdUseCase {
  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
  ) {}

  async execute(id: string): Promise<IGetDoctorById | undefined> {
    if (!id) throw new Error('Id is required')

    const doctor = await this.doctorRepository.findById(id)

    return doctor
  }
}
