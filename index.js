import React, { Component } from 'react';
import { render } from 'react-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layouts/Header';
import Addcontact from './components/contacts/Addcontact'
import {Provider} from './Context';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <div>
       <Header brand="Contactmanager"/>
       <Addcontact />
       <Contacts/>
      </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
