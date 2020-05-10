import React from 'react';
import css from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={css.messages}>
            <div className={css.message}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;