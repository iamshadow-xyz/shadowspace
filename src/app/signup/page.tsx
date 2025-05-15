import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import SubmitButton from '@/components/utils/submit-button'
export default function page() {
  return (
    <div>
        <Card className='w-full max-w-md mx-auto mt-20'>
            <CardHeader>
                <CardTitle>Sign Up to Shadowspace</CardTitle>
                <CardDescription>continue to Shadowspace with Google</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col gap-4'>
                    <SubmitButton text="Sign Up with Google" icon={<FcGoogle />} />
                </div>
            </CardContent>
            <CardFooter>
                <p>Already have an account?<Link className='text-red-400' href="/signin">Sign In</Link></p>
            </CardFooter>
        </Card>
    </div>
  )
}
