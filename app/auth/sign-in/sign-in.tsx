'use client'

import { signInGoogleAction } from '@/lib/auth/actions'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function SignInComponent() {
  return (
    <div className='w-full h-dvh flex justify-center items-center'>
      <div className='max-w-lg w-full flex flex-col space-y-10 p-12 shadow-lg rounded-xl'>
        <h1 className='text-5xl font-semibold font-[family-name:var(--font-geist-sans)] text-[--foreground] leading-[145%]'>
          Sign In.
        </h1>

        <button
          className='w-full px-20 py-5 border border-slate-400 font-bold font-[family-name:var(--font-geist-mono)] rounded-xl flex items-center'
          onClick={signInGoogleAction}
        >
          <FcGoogle className='size-6 me-4' /> Sign In with Google
        </button>
      </div>
    </div>
  )
}
