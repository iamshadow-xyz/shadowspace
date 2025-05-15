"use client"

import React from 'react'
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

export default function SubmitButton({
    text,
    icon,
    variant,
    className,
    size,
}: {
    text?: string;
    icon?: React.ReactNode;
    variant?: "outline" | "default" | "destructive" | "secondary" | "ghost" | "link";
    className?: string;
    size?: "sm" | "lg" | "icon" | undefined;
}) {
    const {pending} = useFormStatus()
  return (
    <Button type='submit' variant={variant || "outline"} disabled={pending} className={className} size={size || "default"}>
        {pending ? 
        <div className='flex items-center gap-2'>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {icon}
            <span>{text}</span>
        </div>
        : 
        <div className='flex items-center gap-2'>
            {icon}
            <span>{text}</span>
        </div>}
    </Button>
  )
}
