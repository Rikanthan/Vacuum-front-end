import React, { Component } from 'react';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceCenterCard from './Widgets/Cards/ServiceCenterCard';
import ShowServiceCenter from './Pages/ShowServiceCenter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact element={
              <ShowServiceCenter/>}>
            </Route>
            <Route path="/login" element={<Login/>}>
            </Route>
            <Route path="/register" element={<Register/>}>
            </Route>
          </Routes>
        </Router>
    </div>
    );
  }
}

export default App;
