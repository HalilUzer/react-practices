import React from 'react'
import { useAddPostMutation } from '../features/posts/postApi.ts'
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../components/inputs/Input.tsx';
import TextArea from '../components/inputs/TextArea.tsx';
import ClipLoaderButton from '../components/buttons/ClipLoaderButton.tsx';
import { useNavigate } from 'react-router-dom';
import ErrorParagraph from '../components/ErrorParagraph.tsx';

const schema = z.object({
    title: z.string().min(1, 'Title cant be empty'),
    body: z.string().min(1, 'Body cant be empty')
})

type FormFiels = z.infer<typeof schema>

export default function NewPostRouter() {

    const [addPost] = useAddPostMutation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful }
    } = useForm<FormFiels>({
        defaultValues: {
            title: '',
            body: ''
        },
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormFiels> = async (data) => {
        try {
            await addPost({ ...data })
            navigate('/')
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
            {errors.title && <ErrorParagraph>{errors.title.message}</ErrorParagraph>}
            <label htmlFor="post">
                Body:
            </label>
            <TextArea register={register} id='body' name='body' rows={9} cols={10} />
            {errors.body && <ErrorParagraph>{errors.body.message}</ErrorParagraph>}
            <ClipLoaderButton isSubmitting={isSubmitting} isSubmitted={isSubmitted && isSubmitSuccessful} type='submit' className='mt-2'>
                Post
            </ClipLoaderButton>
        </form>
    )
}
