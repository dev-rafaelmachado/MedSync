import { Doctor } from '@prisma/client'
import { ICreateDoctorDTO } from '../dto/ICreateDoctorDTO'
import { IGetDoctorById } from '../dto/IGetDoctorById'
import { IUpdateDoctorDTO } from '../dto/IUpdateDoctorDTO'
import { IResponseLoginDTO } from '../dto/IResponseLoginDTO'

export interface IDoctorRepository {
  create(data: ICreateDoctorDTO): Promise<Doctor>
  findById(id: string): Promise<IGetDoctorById | undefined>
  list(): Promise<IGetDoctorById[]>
  update(id: string, data: IUpdateDoctorDTO): Promise<Doctor>
  delete(id: string): Promise<void>
  login(email: string, password: string): Promise<IResponseLoginDTO>
}
