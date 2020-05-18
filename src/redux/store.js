import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _callSubscriber() {
        console.log('_state is changed');
    },

    _state: {
        profilePage: {
            posts: [
                { id: '1', post: 'Hi, how are you?', likes: 12 },
                { id: '2', post: 'Good', likes: 31 },
                { id: '4', post: 'Fine!', likes: 9 },
                { id: '5', post: 'WOW', likes: 5 },
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                { id: '1', name: 'Anton' },
                { id: '2', name: 'Vlad' },
                { id: '3', name: 'Nikita' },
                { id: '4', name: 'Andrey' },
                { id: '5', name: 'Victor' },
                { id: '6', name: 'Anna' }
            ],
            messages: [
                { id: '1', message: 'Hi' },
                { id: '2', message: 'How are you?' },
                { id: '3', message: 'Bye' },
                { id: '4', message: 'Fine!' },
                { id: '5', message: 'WOW' },
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);  
    },
}

export default store;
window.store = store;