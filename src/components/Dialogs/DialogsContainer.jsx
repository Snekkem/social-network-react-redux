import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsReducer.messages,
        newMessageText: state.dialogsReducer.newMessageText,
        dialogs: state.dialogsReducer.dialogs
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (messageText) => {
            dispatch(updateNewMessageTextActionCreator(messageText));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;