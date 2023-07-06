import React, {useEffect, useState} from 'react';
import {postAPI} from '../services/UserService';
import {PostItem} from './PostItem';

export const PostsList = () => {

    const [limit, setLimit] = useState(5)

    const {data: posts, isLoading, error, refetch} = postAPI.useGetPostsQuery(limit, {
        // pollingInterval: 1000
    })

    useEffect(() => {
        setTimeout(() => {
            setLimit(3)
        }, 2000)
    }, [])

    return (
        <div>
            <div className='post-wrapper'>
                <button onClick={() => refetch()}>Refetch</button>
                {isLoading && <h2>Идет загрузка постов...</h2>}
                {error && <h2>Произошла ошибка при загрузке...</h2>}
                {posts &&  posts.map(p => <PostItem post={p} key={p.id}/>)}
            </div>
        </div>
    );
};