import React from 'react';
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/MessageItem';

const Dialogs = (props) => { 
    let MessagesElement = props.messagesPage.messages.map(msg =>
        <Message updateNewMessageText={props.updateNewMessageText}
            message={msg.message} id={msg.id} key={msg.id} />)

    let DialogsElement = props.messagesPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}
            key={dialog.id} />)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessageText(message);
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
                    ref={newMessageElement} onChange={onMessageChange} />
                <button type='button' onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;