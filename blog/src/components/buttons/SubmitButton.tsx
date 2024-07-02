import React from "react"
import type { ReactNode, MouseEventHandler } from "react"

type Props = {
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>,
    className?: string,
    type?: 'button' | 'submit' | 'reset'
}

export default function SubmitButton({ children, onClick, className = '', type = 'submit' }: Props) {

    return (
        <button onClick={onClick} type={type} className={className.length === 0 ? "grid group bg-gray-100 border border-black border-solid rounded-lg mb-2 hover:bg-gray-300 place-content-center p-1 dark:bg-dark-blue dark:hover:bg-black" : className} >
            {children}
        </button>
    )
}