import { ICreatePatientDTO } from '../dto/ICreatePatientDTO'
import { IUpdatePatientDTO } from '../dto/IUpdatePatientDTO'
import { IGetPatientByIdDTO } from '../dto/IGetPatientByIdDTO'
import { IResponseLoginDTO } from '../dto/IResponseLoginDTO'

export interface IPatientRepository {
  create(data: ICreatePatientDTO): Promise<IGetPatientByIdDTO>
  update(id: string, data: IUpdatePatientDTO): Promise<IGetPatientByIdDTO>
  findById(id: string): Promise<IGetPatientByIdDTO | undefined>
  list(): Promise<IGetPatientByIdDTO[]>
  delete(id: string): Promise<void>
  login(email: string, password: string): Promise<IResponseLoginDTO | undefined>
}
