// import { build } from 'vite'
import { clientsApi } from './ClientsApi'

const UserApi = clientsApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => 'users'
        }),
        providesTags: ['Users'],
    })
})

export const { useGetUsersQuery } = UserApi;