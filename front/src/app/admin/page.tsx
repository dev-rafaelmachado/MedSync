import { AdminWrapped } from '@/components/form/admin'

const AdminPage = () => {
  return (
    <main className="flex h-screen w-screen bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 px-52 py-32">
      <div className="h-full w-2/3 bg-white/30 backdrop-blur-lg"></div>
      <div className="flex h-full w-1/3 flex-col bg-white p-16">
        <AdminWrapped />
      </div>
    </main>
  )
}

export default AdminPage
