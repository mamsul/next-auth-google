'use client'

import { GoSignOut } from 'react-icons/go'
import { User } from 'next-auth'
import Image from 'next/image'
import React from 'react'

import signOutGoogleAction from '@/lib/auth/actions/signOutGoogleAction'

interface Props {
  name?: User['name']
  email?: User['email']
  image?: User['image']
}

export default function DashboardComponent({
  name = '',
  image = '',
  email = '',
}: Props) {
  return (
    <div className='w-full h-dvh flex justify-center items-center'>
      <div className='w-full max-w-xl rounded-xl border border-slate-200 p-5 flex flex-col space-y-10'>
        <h1 className='text-2xl font-semibold font-[family-name:var(--font-geist-sans)] text-[--foreground] leading-[145%]'>
          Welcome to Dashboard
        </h1>

        {image && name && email && (
          <div className='flex justify-start items-center space-x-3'>
            <div className='shrink-0 size-14 rounded-full relative overflow-hidden'>
              <Image
                src={image as string}
                alt='Profile Image'
                fill
                sizes='(max-width: 768px) 100vw, 768px'
                className='object-cover object-center size-full'
              />
            </div>
            <div className='font-[family-name:var(--font-geist-mono)] text-slate-700'>
              <p>{name}</p>
              <p>{email}</p>
            </div>
          </div>
        )}

        <hr />

        <button
          className='w-full px-20 py-5 border border-slate-400 font-bold font-[family-name:var(--font-geist-mono)] rounded-xl flex items-center'
          onClick={signOutGoogleAction}
        >
          <GoSignOut className='size-6 me-4' /> Sign Out
        </button>
      </div>
    </div>
  )
}
