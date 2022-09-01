import React, { Component } from 'react';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
     <Register/>
     <Login/>
    </div>
    );
  }
}

export default App;
