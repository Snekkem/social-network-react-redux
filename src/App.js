import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() =>
          <DialogsContainer />} />

        <Route path='/profile' render={() =>
          <Profile />} />

        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
}

export default App;
