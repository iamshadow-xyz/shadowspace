import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import UserAvatar from "./utils/user-avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import SubmitButton from "./utils/submit-button";
import { Trash2 } from "lucide-react";
import { deletePost } from "@/app/action";

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

export default async function PostCard({post, user}: {post: Post, user: User}) {
  return (
    <div>
      <Card className="w-full bg-neutral-900">
        <CardHeader>
          <CardTitle>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Link href={`/post/${post.id}`}>
          <Image
            src={post.thumbnail as string}
            alt="post image"
            width={500}
            height={500}
            className="rounded-md aspect-video object-cover"
          />
          </Link>
        </CardContent>
        <CardFooter className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <UserAvatar src={user.image} name={user.name} />
            <div className="flex flex-col">
              <p className="text-sm text-gray-300">{user.name}</p>
              <p className="text-xs text-gray-400">
                {post.createdAt.toDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {post.userId === user.id ? (
                <div className="flex items-center gap-2">
                    <Button variant={"outline"} size={"sm"} asChild>
                        <Link href={`/edit/post/${post.id}`}>Edit</Link>
                    </Button>
                    <form action={deletePost} className="w-full">
                        <input type="hidden" name="id" value={post.id} />
                        <SubmitButton size={"sm"} icon={<Trash2/>} variant="destructive"/>
                    </form>
                </div>
            ) : (
              <Button variant={"outline"} size={"sm"} asChild>
                <Link href={`/post/${post.id}`}>Read more</Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}