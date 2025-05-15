import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import SubmitButton from '@/components/utils/submit-button'
import { Upload } from 'lucide-react'
import { createPost } from '@/app/action'

export default function page() {
  return (
    <div className="max-w-lg mx-auto mt-20">
        <h1 className='text-xl font-medium'>Create post</h1>
        <form className='space-y-2 mt-2' action={createPost}>
            <Input placeholder="Title" type="text" name="title" />
            <Input placeholder="Thumbnail" type="text" name="thumbnail" />
            <Textarea placeholder="Content" name="content" />
            <SubmitButton icon={<Upload/>} variant='default' className='w-full' text="Create" />
        </form>
    </div>
  )
}
