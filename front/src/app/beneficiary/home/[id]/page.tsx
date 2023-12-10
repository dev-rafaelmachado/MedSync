import { Logout } from '@/components/Logout'
import { IGetAppointmentsById } from '@/types/appointments/IGetAppointmentsById'
import { IGetBeneficiaryByIdDTO } from '@/types/beneficiary/IGetBeneficiaryByIdDTO'
import { IGetDoctorByIdDTO } from '@/types/doctor/IGetDoctorByIdDTO'
import { IGetSpecialtyByIdDTO } from '@/types/specialty/IGetSpecialtyByIdDTO'
import api from '@/utils/api'
import { Client } from './client'

interface Props {
  params: {
    id: string
  }
}

const getBeneficiaryData = async (id: string) => {
  const response = await api.get(`v1/patient/${id}`)
  const data: IGetBeneficiaryByIdDTO = response.data
  return data
}

const getPatientAppointments = async (id: string) => {
  const response = await api.get(`/v1/appointment`, {
    params: {
      patientId: id,
    },
  })
  const data: IGetAppointmentsById[] = response.data
  return data
}

const getSpecialty = async () => {
  const response = await api.get(`/v1/specialty`)
  const data: IGetSpecialtyByIdDTO[] = response.data
  return data
}

const getDoctors = async () => {
  const response = await api.get(`/v1/doctor`)
  const data: IGetDoctorByIdDTO[] = response.data
  return data
}

const BeneficiaryHome = async ({ params }: Props) => {
  const beneficiary: IGetBeneficiaryByIdDTO = await getBeneficiaryData(
    params.id,
  )
  const patientAppointments: IGetAppointmentsById[] =
    await getPatientAppointments(params.id)

  const specialty: IGetSpecialtyByIdDTO[] = await getSpecialty()
  const doctors: IGetDoctorByIdDTO[] = await getDoctors()

  return (
    <div>
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="flex gap-2 text-4xl font-normal">
          <p className="font-bold">Olá</p> {beneficiary.name}
        </h1>
        <div className="container mx-auto flex w-[600px] flex-col gap-6 py-10">
          <Client
            doctors={doctors}
            specialty={specialty}
            patientAppointments={patientAppointments}
          />
        </div>
      </main>
      <Logout name="beneficiary" />
    </div>
  )
}

export default BeneficiaryHome
