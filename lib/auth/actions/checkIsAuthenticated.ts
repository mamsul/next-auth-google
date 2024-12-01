'use server'

import { auth } from '../authConfig'

export default async function checkIsAuthenticated() {
  const session = await auth()

  if (session) return true
  return false
}
