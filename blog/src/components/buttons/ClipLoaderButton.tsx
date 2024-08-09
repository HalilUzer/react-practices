import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import Button from './Button'
import { ClipLoader } from 'react-spinners'
import { MdOutlineDone } from 'react-icons/md'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    isSubmitting: boolean,
    isSubmitted: boolean
}

export default function ClipLoaderButton({ isSubmitting, isSubmitted, children, ...props }: Props) {
    return (
        <Button
         {...props} >
            {isSubmitting ? <ClipLoader size={25} /> : isSubmitted ?
                <MdOutlineDone size={25} /> : children}
        </Button>
    )
}
