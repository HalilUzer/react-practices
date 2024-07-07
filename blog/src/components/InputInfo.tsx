import React, { ReactNode } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

interface Props {
    children: ReactNode
    condition: boolean
}

export default function InputInfo({ children, condition }: Props) {
    return (
        <p className={condition ? 'rounded-xl bg-black text-white mr-auto text-wrap mt-2 text-sm p-1' : 'hidden'}>
            {<FaInfoCircle />}
            {children}
        </p>
    )
}
