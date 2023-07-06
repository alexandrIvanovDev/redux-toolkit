import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import {postAPI} from '../services/PostService';


const rootReducer = combineReducers({
    user: userSlice,
    [postAPI.reducerPath]: postAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
})

export type RootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch