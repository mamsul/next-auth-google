import { redirect } from 'next/navigation'
import React from 'react'

import { checkIsAuthenticated } from '@/lib/auth/actions'
import SignInComponent from './sign-in'

export default async function SignIn() {
  const isAuthenticated = await checkIsAuthenticated()

  if (isAuthenticated) {
    redirect('/dashboard')
  }

  return <SignInComponent />
}
