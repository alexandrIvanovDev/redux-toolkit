import React, {FC} from 'react';
import {IPost} from '../models/IPost';

type PropsType = {
    post: IPost
    deletePost: (id: number) => void
    updatePost: (post: IPost) => void
}

export const PostItem: FC<PropsType> = ({post, deletePost, updatePost}) => {

    const handleDelete = () => {
        deletePost(post.id)
    }

    const handleUpdate = () => {
        const title = prompt() || ''
        updatePost({...post, title})
    }

    return (
        <div className='post'>
            {post.id}. {post.title}
            <button onClick={handleUpdate}>Update post</button>
            <button onClick={handleDelete}>Delete post</button>
        </div>
    );
};