import React from 'react';
import css from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={css.nav}>
            <a className= {`${css.item} ${css.active}`} href="#"><div>Profile</div></a>
            <a className={css.item} href="#"><div>Messages</div></a>
            <a className={css.item} href="#"><div>News</div></a>
            <a className={css.item} href="#"><div>Music</div></a>
        </nav>
    )
}

export default Navbar;