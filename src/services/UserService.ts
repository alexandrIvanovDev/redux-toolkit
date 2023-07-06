import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IPost} from '../models/IPost';


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: builder => ({
        getPosts: builder.query<Array<IPost>, number>({
            query: (limit = 5) => ({
                url: 'posts',
                params: {_limit: limit}
            })
        })
    })
})