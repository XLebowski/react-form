// import React from 'react'
import { useTable } from 'react-table';
import { COLUMNS, MOCK_DATA } from '../../data';
import { v4 as uuidv4 } from 'uuid';
import { useMemo } from 'react';

export default function Clients() {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    const tableInstance = useTable({
        columns,
        data,
    });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => {
                    <tr {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
                        {headerGroup.headers.map((column) => {
                            <th {...column.getHeaderProps()} key={uuidv4()}>
                                {column.render('Header')}
                            </th>;
                        })}
                    </tr>;
                })}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} key={uuidv4()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()} key={uuidv4()}>
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
