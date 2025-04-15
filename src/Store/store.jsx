import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ClientsApi } from '../api/ClientsApi';

const store = configureStore({
    reducer: {
        [ClientsApi.reducerPath]: ClientsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([ClientsApi.middleware])    
})

setupListeners(store.dispatch);

export default store;
