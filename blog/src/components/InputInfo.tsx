import React, { ReactNode } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

interface Props {
    children: ReactNode
}

export default function InputInfo({ children }: Props) {
    return (
        <p className={'rounded-xl bg-black text-white mr-auto text-wrap mt-2 text-sm p-1'}>
            {<FaInfoCircle />}
            {children}
        </p>
    )
}
