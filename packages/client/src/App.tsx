import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
 
 class App extends Component {
   render() {
     return (
      <BrowserRouter>
         <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/post/" component={Post} /> */}
          </Switch>
         </div>
      </BrowserRouter>
     );
   }
 }

 export default App