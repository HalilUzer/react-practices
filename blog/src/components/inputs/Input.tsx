import React, { InputHTMLAttributes } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface Props<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
    register?: UseFormRegister<T>,
    name: Path<T>
}

export default function Input<T extends FieldValues>({ register, className = '', name, ...props }: Props<T>) {
    return (
        <input
            {...(register ? register(name) : {})}
            {...props}
            className={twMerge('border border-black border-solid rounded-lg dark:bg-dark-blue p-1', className)}
            ref={props.itemRef} />
    )
}
