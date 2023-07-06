import React, {FC} from 'react';
import {IPost} from '../models/IPost';

type PropsType = {
    post: IPost
}

export const PostItem: FC<PropsType> = ({post}) => {
    return (
        <div className='post'>
            {post.id}. {post.title}
            <button>Delete post</button>
        </div>
    );
};