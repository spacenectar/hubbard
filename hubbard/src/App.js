import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAcnWfxp8eHWMdEUmfU58zWL4AwfyTktR8',
  authDomain: 'hubbard-2d281.firebaseapp.com',
  databaseURL: 'https://hubbard-2d281.firebaseio.com',
  storageBucket: 'hubbard-2d281.appspot.com',
  messagingSenderId: '355426604475'
};

firebase.initializeApp(config);

class App extends Component {

  constructor() {
    super();
    this.state = {
      SiteName : 'Loading...'
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('Settings');
    const siteNameRef = rootRef.child('SiteName');

    siteNameRef.on('value' , snap => {
      this.setState(
        {
          SiteName : snap.val()
        }
      )
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {this.state.SiteName}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
