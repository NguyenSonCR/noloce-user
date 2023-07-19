import { configureStore } from '@reduxjs/toolkit';
import songSlice from './slices/songSlice';
import homeSlice from './slices/homeSlice';
import toastSlice from './slices/toastSlice';
import authSlice from './slices/authSlice';
import navigateSlice from './slices/navigateSlice';
import historySlice from './slices/historySlice';

export const store = configureStore({
    reducer: {
        song: songSlice,
        homeWeb: homeSlice,
        toast: toastSlice,
        auth: authSlice,
        navigation: navigateSlice,
        history: historySlice,
    },
});
