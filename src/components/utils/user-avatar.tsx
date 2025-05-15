import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function UserAvatar({
    src,
    name,
    className,
}: {
    src: string;
    name: string;
    className?: string;
}) {
  return (
    <Avatar className={className}>
        <AvatarImage src={src} />
        <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  )
}
