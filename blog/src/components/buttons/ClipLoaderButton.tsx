import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import Button from './Button'
import { ClipLoader } from 'react-spinners'
import { MdOutlineDone } from 'react-icons/md'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    isSubmitted: boolean,
    isDone: boolean
}

export default function ClipLoaderButton({ isSubmitted: isSubmitted, isDone, children, ...props }: Props) {
    return (
        <Button
         {...props} >
            {isSubmitted ? <ClipLoader size={25} /> : isDone ?
                <MdOutlineDone size={25} /> : children}
        </Button>
    )
}
