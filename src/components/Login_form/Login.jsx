import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import axios from 'axios';
import twiter from "../../assets/twitter-new-2023-x-logo-white-background-vector_1017-45422.avif";
 
const Login = () => {
  const navigate = useNavigate();  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
   
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/login', {
        email,
        password
      });
      setMessage(`Login successful: ${response.data.message}`);
      navigate('/home');
    } catch (error) {
      setMessage(error.response?.data.message || 'Login failed');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');  
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row g-0">
          <div className='col-md-7 text-center'>
            <img src={twiter} alt="Twitter Logo" width={"50%"} />
          </div>
          <div className='col-md-5 mt-5'>
            <h1><b>Happening now</b></h1>
            <h6><b>Login</b></h6>
            <form onSubmit={handleLogin}>
              <div className='mb-3 mt-3'> 
                <input
                  type="text"
                  className='form-control'
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='mb-3 mt-3'>
                <input
                  type="password"
                  className='form-control'
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className='mb-3 mt-4'>
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            {message && <p>{message}</p>}
            <div className='mb-3 mt-4'>
              <p>Do not have an account? <b onClick={handleRegisterClick} style={{ cursor: 'pointer' }}>Register</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
