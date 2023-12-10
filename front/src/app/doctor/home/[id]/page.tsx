import { DoctorAppointments } from '@/components/DoctorAppointments'
import { Logout } from '@/components/Logout'
import { IGetAppointmentsById } from '@/types/appointments/IGetAppointmentsById'
import { IGetDoctorByIdDTO } from '@/types/doctor/IGetDoctorByIdDTO'
import api from '@/utils/api'

interface Props {
  params: {
    id: string
  }
}

const getDoctorData = async (id: string) => {
  const response = await api.get(`v1/doctor/${id}`)
  const data: IGetDoctorByIdDTO = response.data
  return data
}

const getDoctorAppointmentsByDoctor = async (idDoctor: string) => {
  const response = await api.get(`/v1/appointment`, {
    params: {
      doctorId: idDoctor,
    },
  })
  const data: IGetAppointmentsById[] = response.data
  return data
}

const DoctorHome = async ({ params }: Props) => {
  const doctorId = params.id
  const doctor: IGetDoctorByIdDTO = await getDoctorData(doctorId)
  const appointments = await getDoctorAppointmentsByDoctor(doctorId)

  return (
    <div>
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="flex gap-2 text-4xl font-normal">
          <p className="font-bold">Olá Dr(a). </p>{' '}
          {doctor.name.replace('Dr.', '')}
        </h1>
        <div className="container mx-auto flex w-[600px] flex-col gap-6 py-10">
          <DoctorAppointments appointments={appointments} />
        </div>
      </main>
      <Logout name="doctor" />
    </div>
  )
}

export default DoctorHome
