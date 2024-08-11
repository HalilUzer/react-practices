import React, { TextareaHTMLAttributes } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface Props<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    register: UseFormRegister<T>,
    name: Path<T>
}

export default function TextArea<T extends FieldValues>({ register, name, className = '', ...props }: Props<T>) {
    return (
        <textarea
            {...(register ? register(name) : {})}
            {...props}
            className={twMerge('border border-black border-solid rounded-lg dark:bg-dark-blue p-1', className)} />
    )
}
