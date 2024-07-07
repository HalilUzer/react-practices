import React from "react"
import type { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

export default function Button({ children, className = '', type = 'submit', ...props }: Props) {

    return (
        <button{...props}
            type={type}
            className={twMerge('grid group bg-gray-100 border border-black border-solid rounded-lg mb-2 hover:bg-gray-300 disabled:bg-gray-300 place-content-center p-1 dark:bg-dark-blue dark:hover:bg-black', className)} >
            {children}
        </button>
    )
}