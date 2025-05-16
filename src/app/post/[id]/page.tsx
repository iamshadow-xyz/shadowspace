import React from 'react'
import db from '@/db'
import { posts, users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import Image from 'next/image'
import UserAvatar from '@/components/utils/user-avatar'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const post = await db.select().from(posts).where(eq(posts.id, id)).innerJoin(users, eq(posts.userId, users.id))
    console.log(post)
  return (
    <div className='container'>
        <h1 className='text-2xl font-medium'>{post[0].posts.title}</h1>
        <div className='flex items-center gap-2 my-4'>
            <UserAvatar src={post[0].users.image as string} name={post[0].users.name as string} />
            <div className='flex flex-col'>
                <p className='text-sm text-gray-300'>{post[0].users.name}</p>
                <p className='text-xs text-gray-400'>{post[0].posts.createdAt.toDateString()}</p>
            </div>
        </div>
        <Image src={post[0].posts.thumbnail as string} alt="post image" className='aspect-video object-cover' width={500} height={500} />
        <p className='mt-5'>{post[0].posts.content}</p>
    </div>
  )
}

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const post = await db.select().from(posts).where(eq(posts.id, id)).innerJoin(users, eq(posts.userId, users.id))
    return {
      title: post[0].posts.title,
      description: post[0].posts.content,
      openGraph: {
        title: post[0].posts.title,
        description: post[0].posts.content,
        images: [
          {
            url: post[0].posts.thumbnail,
            width: 800,
            height: 600,
          },
        ],
      },
    }
  }

