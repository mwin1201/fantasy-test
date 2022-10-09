// import logo from './logo.svg';
// import './App.css';

import {BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";


function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
