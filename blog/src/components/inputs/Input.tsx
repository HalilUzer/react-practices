import React, { InputHTMLAttributes, LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    ref?: LegacyRef<HTMLInputElement> 
}

export default function Input({ className = '', type = 'text', ref = undefined ,...props }: Props) {
    return (
        <input {...props} className={twMerge('border border-black border-solid rounded-lg dark:bg-dark-blue p-1', className)} type={type} ref={ref} />
    )
}
