import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <NavLink className={css.item} activeClassName={css.active} to="/profile"><div>Profile</div></NavLink>
            <NavLink className={css.item} activeClassName={css.active} to="/dialogs"><div>Messages</div></NavLink>
            <NavLink className={css.item} activeClassName={css.active} to="/news"><div>News</div></NavLink>
            <NavLink className={css.item} activeClassName={css.active} to="/settings"><div>Settings</div></NavLink>
        </nav>
    )
}

export default Navbar;