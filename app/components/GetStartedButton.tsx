'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function GetStartedButton() {
  const router = useRouter()

  return (
    <button
      className='w-max px-20 py-5 border border-slate-400 hover:shadow-lg hover:-translate-y-1 font-bold font-[family-name:var(--font-geist-mono)] rounded-xl transition-all duration-300 ease-in-out'
      onClick={() => router.push('/auth/sign-in')}
    >
      GET STARTED
    </button>
  )
}
