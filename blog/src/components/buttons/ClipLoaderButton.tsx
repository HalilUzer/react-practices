import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import Button from './Button'
import { ClipLoader } from 'react-spinners'
import { MdOutlineDone } from 'react-icons/md'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    isLoading: boolean,
    isDone: boolean
}

export default function ClipLoaderButton({ isLoading, isDone, children, ...props }: Props) {
    return (
        <Button
         {...props} >
            {isLoading ? <ClipLoader size={25} /> : isDone ?
                <MdOutlineDone size={25} /> : children}
        </Button>
    )
}
