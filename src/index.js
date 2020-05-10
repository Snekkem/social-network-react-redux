import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let PostsData = [
  { id: '1', post: 'Hi, how are you?', likes: 12 },
  { id: '2', post: 'Good', likes: 31 },
  { id: '4', post: 'Fine!', likes: 9 },
  { id: '5', post: 'WOW', likes: 5 },
]

let DialogsData = [
  { id: '1', name: 'Anton' },
  { id: '2', name: 'Vlad' },
  { id: '3', name: 'Nikita' },
  { id: '4', name: 'Andrey' },
  { id: '5', name: 'Victor' },
  { id: '6', name: 'Anna' }
]

let MessagesData = [
  { id: '1', name: 'Hi' },
  { id: '2', name: 'How are you?' },
  { id: '3', name: 'Bye' },
  { id: '4', name: 'Fine!' },
  { id: '5', name: 'WOW' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={PostsData} dialogs={DialogsData} messages={MessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
