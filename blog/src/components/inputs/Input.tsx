import React, { ButtonHTMLAttributes, ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export default function Input({ className = '', type = 'text', ...props }: Props) {
    return (
        <input {...props} className={twMerge('border border-black border-solid rounded-lg dark:bg-dark-blue', className)} type={type} />
    )
}
