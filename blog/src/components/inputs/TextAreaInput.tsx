import React, { TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export default function TextAreaInput({ className = 'border border-black border-solid rounded-lg mb-3 dark:bg-dark-blue', ...props }: Props) {
    return (
        <textarea {...props} className={className} />
    )
}
