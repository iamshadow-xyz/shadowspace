import PostCard from "@/components/post-card";
import db from "@/db";
import { posts, users } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";

interface User {
    name: string;
    image: string;
    id: string;
    email: string;
}

interface Post {
    id: string;
    title: string;
    thumbnail: string;
    content: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

export default async function Home() {
  const session = await auth()
  const user = session?.user
  const allPosts = await db.select().from(posts).innerJoin(users, eq(posts.userId, users.id))
  return (
    <div className="container">
      <h1 className="mb-5 text-xl font-medium">Latest posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPosts.map((post) => (
          <PostCard key={post.posts.id} post={post.posts as Post} user={post.users as User} />
        ))}
      </div>
    </div>
  );
}
