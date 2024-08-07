import React from 'react'
import type { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react"
import { twMerge } from 'tailwind-merge'
import Button from './Button'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

export default function DeleteButton({ children, className = '', type = 'submit', ...props }: Props) {
    return (
        <Button 
        {...props} 
        type={type} 
        className={twMerge('bg-red-600 hover:bg-red-700 dark:bg-dark-blue dark:hover:bg-black', className)}>
            {children}
        </Button>
    )
}
