import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        <Route path='/dialogs' render={() =>
          <Dialogs messagesPage={props.state.messagesPage}
            updateNewMessageText={props.updateNewMessageText}
            addMessage={props.addMessage} />} />

        <Route path='/profile' render={() =>
          <Profile profilePage={props.state.profilePage}
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost} />} />

        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
}

export default App;
