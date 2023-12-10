import { IGetBeneficiaryByIdDTO } from '../beneficiary/IGetBeneficiaryByIdDTO'

export interface IGetAppointmentsById {
  id: string
  date: string
  createdAt: string
  updatedAt: string
  doctorId: string
  patientId: string
  Doctor: {
    id: string
    name: string
    crm: string
    email: string
    createdAt: string
    updatedAt: string
    specialtyId: string
    specialty: {
      id: string
      name: string
      createdAt: string
      updatedAt: string
    }
  }
  Patient: IGetBeneficiaryByIdDTO
}
