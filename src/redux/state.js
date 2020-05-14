let rerenderEntireTree = () => {
    console.log('state is changed');
}

let state = {
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
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 6,
        post: state.profilePage.newPostText,
        likes: 7
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.messagesPage.newMessageText
    }

    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;