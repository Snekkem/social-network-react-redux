import React from 'react';
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/MessageItem';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let MessagesElement = props.messagesPage.messages.map(msg =>
        <Message message={msg.message} id={msg.id} key={msg.id} />)

    let DialogsElement = props.messagesPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}
            key={dialog.id} />)

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (messageText) => {
        props.dispatch(updateNewMessageTextActionCreator(messageText));
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {DialogsElement}
            </div>
            <div className={css.messages}>
                {MessagesElement}
            </div>
            <div></div>
            <div className={css.sendMessage}>
                <textarea rows='3' className={css.textMessage} value={props.messagesPage.newMessageText}
                    onChange={(e) => onMessageChange(e.target.value)} />
                <button type='button' onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;