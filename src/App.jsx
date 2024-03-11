import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/nosotros" element={<Nosotros/>}/>
      </Routes>
    </Router>
  );
}

export default App;
