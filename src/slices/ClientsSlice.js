import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inAccount: false,
    error: false,
    isLoading: false,
};

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        tooggleInAccount: (state, { paylad }) => {
            state.inAccount = paylad;
        },
    },
});

export const { tooggleInAccount } = clientsSlice.actions;
export default clientsSlice.reducer;
