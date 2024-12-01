import { checkIsAuthenticated, getUserDataAction } from '@/lib/auth/actions'
import DashboardComponent from './dashboard'
import { redirect } from 'next/navigation'

export default async function Home() {
  const isAuthenticated = await checkIsAuthenticated()
  const userData = await getUserDataAction()
  console.log({ isAuthenticated })

  if (!isAuthenticated) {
    redirect('/auth/sign-in')
  }

  return <DashboardComponent {...userData} />
}
