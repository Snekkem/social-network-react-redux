import React from 'react';
import css from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.key;

    return (
        <NavLink to={path} activeClassName={css.active}>
            <div className={css.dialog}>{props.name}</div>
        </NavLink>
    )
}

export default DialogItem;