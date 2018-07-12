import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Layout from './Component/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
