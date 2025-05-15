"use client";

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

export default function PostCard({
  user,
  post,
}: {
  user: {
    name: string;
    image: string;
    id: string;
    email: string;
  };
  post: {
    id: string;
    title: string;
    thumbnail: string;
    content: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  };
}) {
  return (
    <div>
      <Card className="w-full bg-neutral-900">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={post.thumbnail}
            alt="post image"
            width={500}
            height={500}
            className="rounded-md aspect-video object-cover"
          />
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
            {user.id === post.userId ? (
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
