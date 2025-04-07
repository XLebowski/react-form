import { NavLink } from 'react-router-dom';
// import React from 'react'

export default function Menu() {
    return (
        <section className='menu'>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </section>
    );
}
