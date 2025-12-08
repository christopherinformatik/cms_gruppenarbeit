import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/Home';
import Footer from './components/Footer';
import BackendPage from './components/BackendPage';   // ⬅ neu
import FrontendPage from './components/FrontendPage'; // ⬅ neu
import { Routes, Route } from 'react-router-dom';     // ⬅ neu

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backend" element={<BackendPage />} />
        <Route path="/frontend" element={<FrontendPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
