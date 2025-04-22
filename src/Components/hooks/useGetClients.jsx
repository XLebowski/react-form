// import React from 'react'

import {
    useGetClientsQuery,
    // useGetPersonalClientsQuery,
} from '../../api/ClientsApi';
import { useMemo } from 'react';

export default function useGetClients() {
    const { data, isLoading, error } = useGetClientsQuery();
    const clientsColumns = useMemo(() => [], []);
    
    for (let elem in data?.[0]) {
        clientsColumns.push({
            Header: elem,
            accessor: elem,
        });
    }
    

    const datas = useMemo(() => data?.slice(1, 11), [data]);
    const clients = useMemo(() => clientsColumns, [clientsColumns]);
    return {
        clients,
        datas,
        isLoading,
        error,
    };
}
