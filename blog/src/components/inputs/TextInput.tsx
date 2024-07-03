import React, { ButtonHTMLAttributes, ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export default function TextInput({ className = 'border border-black border-solid rounded-lg dark:bg-dark-blue', ...props }: Props) {
    return (
        <input {...props} className={className} />
    )
}
