import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    code: '',
    history: 0,
};

export const navigateSlice = createSlice({
    name: 'navigateSlice',
    initialState,
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload;
        },

        setHistoryStore: (state, action) => {
            state.history = action.payload;
        },
    },
});

export const { setCode, setHistoryStore } = navigateSlice.actions;

export default navigateSlice.reducer;
