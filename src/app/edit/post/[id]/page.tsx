import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import SubmitButton from '@/components/utils/submit-button'
import { Upload } from 'lucide-react'
import { updatePost } from '@/app/action'
import db from '@/db'
import { posts } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { users } from '@/db/schema'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const post = await db.select().from(posts).where(eq(posts.id, id)).innerJoin(users, eq(posts.userId, users.id))
    console.log(post)
  return (
    <div className="max-w-lg mx-auto mt-20">
        <h1 className='text-xl font-medium'>Edit post</h1>
        <form className='space-y-2 mt-2' action={updatePost}>
            <Input defaultValue={post[0].posts.title as string} placeholder="Title" type="text" name="title" />
            <Input defaultValue={post[0].posts.thumbnail as string} placeholder="Thumbnail" type="text" name="thumbnail" />
            <Textarea defaultValue={post[0].posts.content as string} placeholder="Content" name="content" />
            <SubmitButton icon={<Upload/>} variant='default' className='w-full' text="Update" />
        </form>
    </div>
  )
}
