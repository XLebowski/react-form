import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Menu() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <section className='menu'>
            <NavLink
                to='/posts'
                className={({ isActive }) =>
                    isActive ? 'active menu-link' : 'menu-link'
                }
                onClick={handleClick}
            >
                Posts
            </NavLink>
                <NavLink
                    to='/users'
                    className={({ isActive }) =>
                        isActive ? 'active menu-link' : 'menu-link'
                    }
                    onClick={handleClick}
                >
                    Users
                </NavLink>
                <NavLink
                    to='/search'
                    className={({ isActive }) =>
                        isActive ? 'active menu-link' : 'menu-link'
                    }
                    onClick={handleClick}
                >
                    Search
                </NavLink>
        </section>
    );
}
