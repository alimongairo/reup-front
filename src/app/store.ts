import { configureStore } from '@reduxjs/toolkit'
import { api } from '../redux/baseApi';
import brandReducer from '../redux/features/brand/brandSlice';

const store = configureStore({
    reducer: {
        brand: brandReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
