import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/api/products/:productId" element={<SingleProduct />} exact />
      </Routes>
    </div>
  );
}

export default App;
