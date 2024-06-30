import React from "react"
import type { ReactNode, MouseEventHandler } from "react"

type props = {
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function SubmitButton({ children , onClick }: props) {   

    return (
        <button onClick={onClick} type="submit" className="grid group bg-gray-100 border border-black border-solid rounded-lg mb-2 hover:bg-gray-300 place-content-center p-1 dark:bg-dark-blue dark:hover:bg-black" >
            {children}
        </button>
    )
}