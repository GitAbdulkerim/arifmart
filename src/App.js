import './App.css';
import React from 'react';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from './Mainpage';

function App() {
return (
<div className="App">
  <Router>
    <Routes>
      <Route path='/' element={<><Mainpage/></>} />
      <Route path='/home' element={<><Header /><Home /></>} />
      <Route path='/checkout' element={<><Header /><Checkout /></>} />
      <Route path='/login' element={<><Login /></>}/>
    </Routes>
  </Router>
</div>
);
}

export default App;
