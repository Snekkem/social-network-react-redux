import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/600px-IMessage_logo.svg.png"></img>
        </header>
    )
}

export default Header;