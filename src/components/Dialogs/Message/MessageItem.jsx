import React from 'react';
import css from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={css.message}>
            <div className={css.myMessage}>
                <div> {props.message}</div>
                <img src="https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            {/* <div className={css.yourMessage}>
                <img src="https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div> {props.message}</div>
            </div> */}
        </div>
    )
}

export default Message;