import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export default function ErrorParagraph({children} : Props) {
  return (
    <p className='text-red-500'>{children}</p>
  )
}
