import React, {useEffect, useState} from 'react';
import {postAPI} from '../services/PostService';
import {PostItem} from './PostItem';
import {IPost} from '../models/IPost';

export const PostsList = () => {

    const [limit, setLimit] = useState(10)

    const {data: posts, isLoading, error, refetch} = postAPI.useGetPostsQuery(limit, {
        // pollingInterval: 1000
    })

    const [createPost] = postAPI.useCreatePostMutation()

    const [updatePost] = postAPI.useUpdatePostMutation()

    const [deletePost] = postAPI.useDeletePostMutation()

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])

    const addNewPost = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <div>
            <div className='post-wrapper'>
                {/*<button onClick={() => refetch()}>Refetch</button>*/}
                <button onClick={addNewPost}>Create new post</button>
                {isLoading && <h2>Идет загрузка постов...</h2>}
                {error && <h2>Произошла ошибка при загрузке...</h2>}
                {posts &&  posts.map(p => <PostItem post={p} key={p.id} deletePost={deletePost} updatePost={updatePost}/>)}
            </div>
        </div>
    );
};