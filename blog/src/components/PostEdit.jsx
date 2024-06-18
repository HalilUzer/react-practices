import {useState} from 'react'
import SubmitButton from "./SubmitButton";

export default function PostEdit({ handleSubmit, isLoading, isDone }) {

    const [newPost, setNewPost] = useState({ title: '', body: '' })


    return (
        <form className='flex flex-col p-3' action="" onSubmit={e => handleSubmit(e, newPost)}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" required onChange={e => setNewPost({ ...newPost, title: e.target.value })} autoFocus className="border border-black border-solid rounded-lg" value={newPost.title} />
            <label htmlFor="post">Post</label>
            <textarea id="post" required rows={9} cols={10} onChange={e => setNewPost({ ...newPost, body: e.target.value })} className="border border-black border-solid rounded-lg mb-3" value={newPost.body} />
            <SubmitButton isLoading={isLoading} isDone={isDone} />
        </form>
    )
}
