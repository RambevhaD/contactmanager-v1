import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { render } from 'react-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layouts/Header';
import About from './components/pages/About';
import Addcontact from './components/contacts/Addcontact'
import {Provider} from './Context';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
      <div>
       <Header brand="Contactmanager"/>
       <div className="container">

       <Switch>
       <Route exact path="/" component={Contacts} />
       <Route exact path="/contact/add" component={Addcontact} />
       <Route exact path="/about" component={About} />
       </Switch>

       </div>
       </div>
      </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
