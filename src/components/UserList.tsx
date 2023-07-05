import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {getUsers} from '../store/actionCreators';

export const UserList = () => {

    const {users, isLoading, error} = useAppSelector(state => state.user)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div>
            {isLoading && <h2>Идет загрузка...</h2>}
            {error && <h2>{error}</h2>}
            {users.map(u => <div key={u.id}>{u.id}. {u.name}</div>)}
        </div>
    );
};