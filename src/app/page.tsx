import PostCard from "@/components/post-card";
import db from "@/db";
import { posts, users } from "@/db/schema";
import { eq } from "drizzle-orm";

interface Post {
  id: string;
  title: string;
  thumbnail: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

export default async function Home() {
  const data = await db.select().from(posts).innerJoin(users, eq(posts.userId, users.id))
  return (
    <div className="container">
      <h1 className="text-xl">Latest posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {data.map((post) => (
        <PostCard key={post.posts.id} post={post.posts as Post} user={post.users as User} />
      ))}
      </div>
    </div>
  )
}
