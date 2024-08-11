import React from "react";
import { useGetPostQuery, useUpdatePostMutation } from "../features/posts/postApi.ts";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/inputs/Input.tsx";
import TextArea from "../components/inputs/TextArea.tsx";
import ClipLoaderButton from "../components/buttons/ClipLoaderButton.tsx";
import z from 'zod';
import ErrorParagraph from "../components/ErrorParagraph.tsx";
const schema = z.object({
    title: z.string().min(1, 'Title cant be empty'),
    body: z.string().min(1, 'Body cant be empty')
})

type FormFields = z.infer<typeof schema>

export default function EditPostRouter() {
    const navigate = useNavigate()
    const [updatePost] = useUpdatePostMutation()
    const { id } = useParams()
    const {
        data: post
    } = useGetPostQuery(Number(id))

    if (!post) {
        navigate('/404')
    }

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting, disabled, isSubmitSuccessful }
    } = useForm<FormFields>({
        defaultValues: {
            title: post?.title,
            body: post?.body
        },
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            updatePost({ ...post!, ...data })
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className='flex flex-col p-3' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title:</label>
            <Input register={register} name="title" id="title" />
            {errors.title && <ErrorParagraph>{errors.title.message}</ErrorParagraph>}
            <label htmlFor="post">Body:</label>
            <TextArea register={register} name="body" id="body" rows={9} cols={12} />
            {errors.body && <ErrorParagraph>{errors.body.message}</ErrorParagraph>}
            <ClipLoaderButton isSubmitted={isSubmitSuccessful} isSubmitting={isSubmitting} disabled={disabled} type="submit">Save</ClipLoaderButton>
            {errors.root && <ErrorParagraph>{errors.root.message}</ErrorParagraph>}
        </form>
    )
}