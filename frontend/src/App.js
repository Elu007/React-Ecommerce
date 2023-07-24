import React from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <div className='App'>
      <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path="/api/products/:id" Component={SingleProduct} />
    </Routes>
    </div>
  );
}

export default App;
