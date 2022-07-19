import React from "react";
import './App.css';
import Home from './pages/Home';
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    // BEM
    <div className="app">
      <Router>

        <Routes>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
