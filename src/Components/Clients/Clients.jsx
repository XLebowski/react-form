// import React from 'react'
import { useTable } from 'react-table';
// import { COLUMNS, MOCK_DATA } from '../../data';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
// import { useGetClientsQuery } from '../../api/ClientsApi';
import useGetClients from '../hooks/useGetClients';

export default function Clients() {
    // const { data: clients } = useGetClientsQuery();
    const [data, setData] = useState([]);
    const [colum, setColum] = useState([]);
    const { clients: columns, datas } = useGetClients();
    // console.log(columns, datas);
    useEffect(() => {
        setData(datas);
        setColum(columns);
    }, []);
    // const columns = useMemo(() => COLUMNS, []);
    // const data = useMemo(() => MOCK_DATA, []);

    let tableInstance = useTable({
        columns: colum,
        data: data,
    });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()} key={uuidv4()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} key={uuidv4()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()} key={uuidv4()}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
