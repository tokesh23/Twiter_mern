import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login_form/Login';
import Registration from "./components/Login_form/Registraion";  

const App = () => {
  return (
    <Router>
      <div className='bg'>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
