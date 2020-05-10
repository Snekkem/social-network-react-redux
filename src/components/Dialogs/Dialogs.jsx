import React from 'react';
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/MessageItem';

const Dialogs = (props) => {
    let MessagesElement = props.messages.map(msg => <Message message={msg.name} key={msg.id} />)
    let DialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} />)

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                 {DialogsElement} 
            </div>
            <div className={css.messages}>
                {MessagesElement}
            </div>
        </div>
    )
}

export default Dialogs;