import { MdDelete } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Post as PostType } from "../features/posts/postApi.ts";
import React, { SetStateAction, Dispatch } from "react";
import Button from "./buttons/Button.tsx";
import DeleteButton from "./buttons/DeleteButton.tsx";

interface Props {
    post: PostType,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
}

export default function Post({ post, setIsModalOpen }: Props) {
    const navigate = useNavigate();

    return (
        <article className='pt-8 px-4 pb-8 py-4'>
            <div className="flex items-center justify-normal">
                <div className='w-9/12'><h2>{post.title}</h2>
                    <p className='mt-4 mb-4'>{post.datetime}</p>
                </div>
                <form action="" className="flex justify-around grow" onSubmit={e => e.preventDefault()}>
                    <Button onClick={e => navigate(`/edit/${post.id}`)}>
                        <CiSettings className="size-12" />
                    </Button>
                    <DeleteButton onClick={e => setIsModalOpen(true)}>
                        <MdDelete className='size-12' />
                    </DeleteButton>
                </form>
            </div>
            <p className='break-words'>{post.body}</p>
        </article>
    )
}
