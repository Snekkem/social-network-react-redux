import React from 'react';
import css from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path} activeClassName={css.active}>
            <div className={css.dialog}>
                <div>
                    <img src="https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </div>
                <div>
                    {props.name}
                </div>
            </div>
        </NavLink>
    )
}

export default DialogItem;