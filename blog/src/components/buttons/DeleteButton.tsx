import React from 'react'
import type { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react"
import { twMerge } from 'tailwind-merge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

export default function DeleteButton({ children, className = '', type = 'submit', ...props }: Props) {

    return (
        <button 
        {...props} 
        type={type} 
        className={twMerge('grid bg-gray-100 border border-black border-solid rounded-lg mb-2 place-content-center p-1 dark:bg-dark-blue dark:hover:bg-black hover:bg-red-600', className)} >
            {children}
        </button>
    )
}
