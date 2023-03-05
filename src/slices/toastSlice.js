import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toastList: [],
};

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        addToast: (state, action) => {
            state.toastList = [...state.toastList, action.payload];
        },
        deleteToast: (state, action) => {
            state.toastList = state.toastList.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToast, deleteToast } = toastSlice.actions;

export default toastSlice.reducer;
