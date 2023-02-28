import { configureStore } from '@reduxjs/toolkit';
import songSlice from './slices/songSlice';
import homeSlice from './slices/homeSlice';

export const store = configureStore({
    reducer: {
        song: songSlice,
        homeWeb: homeSlice,
    },
});
