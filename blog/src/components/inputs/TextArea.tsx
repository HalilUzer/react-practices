import React, { TextareaHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export default function TextArea({ className = '', ...props }: Props) {
    return (
        <textarea
            {...props}
            className={twMerge('border border-black border-solid rounded-lg mb-3 dark:bg-dark-blue p-1', className)} />
    )
}
