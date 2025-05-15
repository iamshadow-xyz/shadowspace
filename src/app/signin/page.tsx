import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import SignInButton from '@/components/auth/signin'
export default function page() {
  return (
    <div>
        <Card className='w-full max-w-md mx-auto mt-20'>
            <CardHeader>
                <CardTitle>Sign In to Shadowspace</CardTitle>
                <CardDescription>continue to Shadowspace with Google</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col gap-4'>
                    <SignInButton />
                </div>
            </CardContent>
            <CardFooter>
                <p>Don&apos;t have an account? <Link className='text-red-400' href="/signup">Sign Up</Link></p>
            </CardFooter>
        </Card>
    </div>
  )
}
