// import React from 'react'
import { useEffect, useState } from 'react';
import { data } from '../../data.js';

export default function Search() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const dataResult = data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setResults(dataResult);
        // setSearch('');
    };

    useEffect(() => {
        if (!search.length) setResults('');
    }, [search]);

    return (
        <>
            <form className='search-form' onSubmit={handleSearch}>
                <label className='search-label'>
                    <input
                        type='text'
                        placeholder='вводить здесь...'
                        className='search-input'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
                <button type='submit' className='search-button'>
                    Найти
                </button>
                <button type='button' className='search-button' onClick={() => setSearch('')}>
                    Очистить
                </button>
            </form>
            {results.length > 0 ? (
                <div className='search-results'>
                    {results.map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))}
                </div>
            ) : (
                <div className='search-results'>
                    <div>Ничего не найдено</div>
                </div>
            )}
        </>
    );
}
