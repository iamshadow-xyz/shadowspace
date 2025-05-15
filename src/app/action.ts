"use server"
import { auth } from "@/lib/auth"
import db from "@/db"
import { posts } from "@/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

interface User {
    id: string;
    name: string;
    email: string;
    image: string;
}

const createPost = async (formData: FormData) => {
    const session = await auth()
    const user = session?.user as User 
    const title = formData.get("title")
    const thumbnail = formData.get("thumbnail")
    const content = formData.get("content")
    if (!user || !title || !thumbnail || !content) {
        return
    }
    await db.insert(posts).values({
        title: title as string,
        thumbnail: thumbnail as string,
        content: content as string,
        userId: user.id,
    })
    revalidatePath("/profile")
    redirect("/profile")
}

const updatePost = async (formData: FormData) => {
    const session = await auth()
    const user = session?.user as User
    const title = formData.get("title")
    const thumbnail = formData.get("thumbnail")
    const content = formData.get("content")
    const id = formData.get("id")
    if (!user || !title || !thumbnail || !content || !id) {
        return
    }
    await db.update(posts).set({
        title: title as string,
        thumbnail: thumbnail as string,
        content: content as string,
    }).where(eq(posts.id, id as string))
    revalidatePath("/profile")
    redirect("/profile")
}

const deletePost = async (formData: FormData) => {
    const session = await auth()
    const user = session?.user as User
    const id = formData.get("id")
    if (!user || !id) {
        return
    }
    await db.delete(posts).where(eq(posts.id, id as string))
    revalidatePath("/profile")
    redirect("/profile")
}

export { createPost, updatePost, deletePost }
