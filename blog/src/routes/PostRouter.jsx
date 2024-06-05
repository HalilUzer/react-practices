import React, { useState } from 'react'
import Header from '../Header'
import Nav from '../Nav'
import Footer from '../Footer'
import DeletePostModal from '../DeletePostModal'
import { MdDelete } from 'react-icons/md'
import { useGetPostQuery } from '../features/posts/postApi'
import PostLoadError from '../PostLoadErrore'



export default function PostRouter({ postId }) {

    const {
        data: post,
        isLoading,
        isError,
        isFetching,
        refetch,
        error
    } = useGetPostQuery()

    const [isModalOpen, setIsModelOpen] = useState(false)

    return (
        <div className='PostPage'>
            <Header />
            <Nav />
            <main>

                {error ? <PostLoadError refetch={refetch} /> : isLoading ? <p>Loading...</p> : post ? <article className='Post'>
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p className='PostDate'>{post.datetime}</p>
                        <p>{post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}</p>
                    </div>
                    <form action="" onClick={e => setIsModelOpen(true)}>
                        <button type='button'>
                            <MdDelete />
                        </button>
                    </form>
                    <DeletePostModal postId={post.id} isModalOpen={isModalOpen} setIsModelOpen={setIsModelOpen} />
                </article> : <p>We couldnt found your post</p>}
            </main>
            <Footer />
        </div>
    )
}
