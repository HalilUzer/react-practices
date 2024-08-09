import React, { useState } from 'react'
import { useAddPostMutation } from '../features/posts/postApi.ts'
import Input from '../components/inputs/Input.tsx';
import TextArea from '../components/inputs/TextArea.tsx';
import ClipLoaderButton from '../components/buttons/ClipLoaderButton.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { date, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    title: z.string(),
    body: z.string()
})

type FormFiels = z.infer<typeof schema>

export default function NewPostRouter() {

    const [addPost] = useAddPostMutation()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitted, isSubmitting }
    } = useForm<FormFiels>({
        defaultValues: {
            title: '',
            body: ''
        },
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormFiels> = async (data) => {
        try {
            const addPostPromise = addPost({ ...data })
            await addPostPromise;
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <form className='flex flex-col p-3' action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">
                Title:
            </label>
            <Input register={register} name='title' id='title' />
            <label htmlFor="post">
                Body:
            </label>
            <TextArea register={register} id='body' name='body' rows={9} cols={10} />
            <ClipLoaderButton isSubmitting={isSubmitting} isSubmitted={isSubmitted}>
                Submit
            </ClipLoaderButton>
        </form>
    )
}
