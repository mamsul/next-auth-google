'use server'

import { signOut } from '@/lib/auth/authConfig'

export default async function signOutGoogleAction() {
  try {
    await signOut()
  } catch (error) {
    throw error
  }
}
