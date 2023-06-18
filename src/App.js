import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';



import Footer from './Component/Footer';
import './App.css';
import Contact from './Component/Contact';
import Skills from './Component/Skills';
import Hero from './Component/Hero';
import About from './Component/About';
import Projects from './Component/Projects';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
   <Footer />
    
    </>
  );
};

export default App;
