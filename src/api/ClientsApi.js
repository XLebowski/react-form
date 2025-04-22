import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { editClient } from '../constants/path';

export const clientsApi = createApi({
    reducerPath: 'clientsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://67fe360c3da09811b17817d7.mockapi.io/',
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
            query: () => {
                // console.log('clients');
                return {
                    url: 'clients',
                    method: 'GET',
                };
            },
            providesTags: ['Clients'],
        }),
        getPersonalClients: build.query({
            query: (id) => ({
                url: editClient(id),
                method: 'GET',
            }),
            providesTags: ['Clients'],
        }),
    }),
});

export const { useGetClientsQuery, useGetPersonalClientsQuery } = clientsApi;
