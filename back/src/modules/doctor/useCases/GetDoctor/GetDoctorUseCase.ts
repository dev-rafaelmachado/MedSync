import { inject, injectable } from 'tsyringe'
import { IDoctorRepository } from '../../infra/IDoctorRepository'
import { IGetDoctorById } from '../../dto/IGetDoctorById'

@injectable()
export class GetDoctorUseCase {
  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
  ) {}

  async execute(): Promise<IGetDoctorById[]> {
    const doctors = await this.doctorRepository.list()

    return doctors
  }
}
