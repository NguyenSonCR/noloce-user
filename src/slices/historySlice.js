import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    history: [],
    counter: 0,
};

export const historySlice = createSlice({
    name: 'historySlice',
    initialState,
    reducers: {
        putHistory: (state, action) => {
            state.history = [...state.history, action.payload];
            state.counter = state.counter + 1;
        },

        backHistory: (state, action) => {
            state.counter = state.counter - 1;
        },

        nextHistory: (state, action) => {
            state.counter = state.counter + 1;
        },

        setCouter: (state, action) => {
            state.counter = action.payload;
        },
    },
});

export const { putHistory, backHistory, nextHistory, setCouter } = historySlice.actions;

export default historySlice.reducer;
