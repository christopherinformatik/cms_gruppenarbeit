import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/Home';
import Footer from './components/Footer';
import BackendPage from './components/BackendPage';   // ⬅ neu
import FrontendPage from './components/FrontendPage'; // ⬅ neu
import { Routes, Route } from 'react-router-dom';     // ⬅ neu
import BlogPage from './components/BlogPage';
import StrapiReactPage from './components/StrapiReactPage';
import StrapiPage from "./components/StrapiPage";
import ReactInfoPage from "./components/ReactInfoPage";
import SynergyPage from "./components/SynergyPage";
import InstallationPage from "./components/InstallationPage";
import TeamPage from "./components/TeamPage";




function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backend" element={<BackendPage />} />
        <Route path="/frontend" element={<FrontendPage />} />
        <Route path="/blog" element={<BlogPage />} />   {/* ⬅ neu */}
        <Route path="/strapi-react" element={<StrapiReactPage />} />
        <Route path="/strapi" element={<StrapiPage />} />
        <Route path="/react" element={<ReactInfoPage />} />
        <Route path="/synergie" element={<SynergyPage />} />
        <Route path="/installation" element={<InstallationPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
