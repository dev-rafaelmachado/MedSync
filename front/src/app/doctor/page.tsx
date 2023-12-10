import { DoctorWrapped } from '@/components/form/doctor'

const medicosPage = () => {
  return (
    <main className="flex h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 px-52 py-32">
      <div className="h-full w-2/3 bg-white/30 backdrop-blur-lg"></div>
      <div className="flex h-full w-1/3 flex-col bg-white p-16">
        <DoctorWrapped />
      </div>
    </main>
  )
}

export default medicosPage
