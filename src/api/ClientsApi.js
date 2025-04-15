import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE, CLIENTS, editClient } from '../constants/path';

export const ClientsApi = createApi({
    reducerPath: 'clientsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE,
        // prepareHeaders: (headers) => {
        //     const token = localStorage.getItem('token');
        //     if (token) {
        //         headers.set('Authorization', `Token ${token}`);
        //     }
        //     return headers;
        // }
    }),
    tagTypes: ['Clients'],
    endpoints: (build) => ({
        getClients: build.query({
            query: () => ({
                url: CLIENTS,
                method: 'GET',
            }),
            providesTags: ['Clients'],
        }),
        getPersonalClient: build.query({
            query: (id) => ({
                url: editClient(id),
                method: 'GET',
            }),
            providesTags: ['Clients'],
        }),
    }),
});

export const { useGetClientsQuery, useGetPersonalClientsQuery } = ClientsApi;
