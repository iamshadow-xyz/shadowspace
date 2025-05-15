import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { auth } from '@/lib/auth'
import UserDropdown from './utils/user-dropdown'

export default async function Header() {
  const session = await auth()
  return (
    <header className='border-b'>
        <div className='container flex items-center justify-between'>
            <Link href="/" className='flex items-center gap-2'>
                <Image src="/logo.png" width={35} height={35} alt="logo" />
                <h1 className='text-xl font-medium text-red-400'>Shadowspace</h1>
            </Link>
            <div className='flex gap-2'>
              {session ? (
                <UserDropdown />
              ) : (
                <>
                <Button asChild>
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
                </>
              )}
            </div>
        </div>
    </header>
  )
}
