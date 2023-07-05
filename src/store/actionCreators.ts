import axios from 'axios';
import {IUser} from '../models/IUser';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk(
    'user/getUsers',
    async (arg, {rejectWithValue}) => {
        try {
            const res = await axios.get<Array<IUser>>('https://jsonplaceholder.typicode.com/userss')
            return res.data
        } catch (e) {
            return rejectWithValue('Some error')
        }
    }
)