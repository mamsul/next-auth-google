'use server'

import { signIn } from '@/lib/auth/authConfig'

export default async function signInGoogleAction() {
  try {
    await signIn('google', { redirectTo: '/dashboard' })
  } catch (error) {
    throw error
  }
}
