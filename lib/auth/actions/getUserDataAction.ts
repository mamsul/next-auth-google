'use server'

import { auth } from '@/lib/auth/authConfig'

export default async function getUserDataAction() {
  const session = await auth()

  if (session) return session.user
  return null
}
