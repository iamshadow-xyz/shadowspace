import React from "react";
import { auth } from "@/lib/auth";
import UserAvatar from "@/components/utils/user-avatar";
import PostCard from "@/components/post-card";
import db from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
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

export default async function page() {
  const session = await auth();
  const user = session?.user as User;
  const userPosts = await db
    .select()
    .from(posts)
    .where(eq(posts.userId, user?.id));
  return (
    <div className="container">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Hello, {user?.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4 my-4">
            <UserAvatar
              className="cursor-pointer h-20 w-20"
              src={user?.image || ""}
              name={user?.name || ""}
            />
            <div className="flex flex-col gap-1">
              <p>{user?.name}</p>
              <p>{user?.email}</p>  
              <Button size={"sm"} asChild>
                <Link href="/create/post">Create post</Link>
              </Button>
            </div>
        </CardContent>
      </Card>
      <h2 className="text-xl font-medium my-5">Your posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userPosts.map((post) => (
          <PostCard key={post.id} post={post as Post} user={user as User} />
        ))}
      </div>
    </div>
  );
}
