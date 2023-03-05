import { configureStore } from '@reduxjs/toolkit';
import songSlice from './slices/songSlice';
import homeSlice from './slices/homeSlice';
import toastSlice from './slices/toastSlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
    reducer: {
        song: songSlice,
        homeWeb: homeSlice,
        toast: toastSlice,
        auth: authSlice,
    },
});
