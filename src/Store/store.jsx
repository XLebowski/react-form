import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { clientsApi } from '../api/ClientsApi';
import clientsSlice from '../slices/ClientsSlice';

const store = configureStore({
    reducer: {
        [clientsApi.reducerPath]: clientsApi.reducer,
        clients: clientsSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([clientsApi.middleware]),
});

setupListeners(store.dispatch);

export default store;
