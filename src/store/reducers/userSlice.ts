import {createSlice} from '@reduxjs/toolkit';
import {IUser} from '../../models/IUser';
import {getUsers} from '../actionCreators';


const initialState: InitialStateType = {
    users: [],
    isLoading: false,
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false
            state.error = null
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false
            // @ts-ignore
            state.error = action.payload
        })
    }
})

// export const {} = userSlice.actions

type InitialStateType = {
    users: Array<IUser>
    isLoading: boolean
    error: string | null
}

export default userSlice.reducer