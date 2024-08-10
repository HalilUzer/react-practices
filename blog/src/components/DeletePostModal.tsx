import React, { Dispatch, MouseEvent, SetStateAction, useRef } from 'react';
import Button from './buttons/Button';
import DeleteButton from './buttons/DeleteButton';
import { usePostDelete } from '../hooks/postHooks';


interface Props {
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
    postId: string
}

export default function DeletePostModal({ isModalOpen, setIsModalOpen, postId }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    if (isModalOpen) {
        dialogRef.current?.showModal()
    }
    else {
        dialogRef.current?.close()
        return null
    }

    const handlePostDelete = usePostDelete(isModalOpen, setIsModalOpen, postId!)

    return (
        <dialog
            className='flex flex-col justify-center fixed border border-black -translate-x-1/2 -translate-y-1/2 bg-gray-200 border-1 p-14 top-1/2 left-1/2 backdrop:bg-black/50 dark:bg-gray-700'
            ref={dialogRef}>
            <h2 className='dark:text-white m-4'>Are You Sure?</h2>
            <form action="" onSubmit={(e) => e.preventDefault()} className='flex justify-around items-center w-full'>
                <DeleteButton onClick={handlePostDelete}>
                    Yes
                </DeleteButton>
                <Button onClick={e => setIsModalOpen(false)}>
                    No
                </Button>
            </form>
        </dialog>
    )
}
