import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';


const rootReducer = combineReducers({
    user: userSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch