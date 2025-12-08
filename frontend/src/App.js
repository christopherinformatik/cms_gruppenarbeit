import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
