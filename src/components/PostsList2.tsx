import React from 'react';
import {postAPI} from '../services/PostService';

export const PostsList2 = () => {

    const {data: posts, isLoading, error} = postAPI.useGetPostsQuery(5)

    return (
        <div>
            <div className='post-wrapper'>
                {isLoading && <h2>Идет загрузка постов...</h2>}
                {error && <h2>Произошла ошибка при загрузке...</h2>}
                {/*{posts &&  posts.map(p => <PostItem post={p} key={p.id}/>)}*/}
            </div>
        </div>
    );
};