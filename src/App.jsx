import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login_form/Login.jsx';
 import Registration from "./components/Login_form/Registraion.jsx"; 
 import Home from "./components/Home.jsx"


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Registration/>}/>
      
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </Router>
  );
}

export default App;
