import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Login.css';
import twiter from "../../assets/twitter-new-2023-x-logo-white-background-vector_1017-45422.avif";

const Login = () => {
  const navigate = useNavigate();  

  const handleRegisterClick = () => {
    navigate('/');  
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row g-0">
          <div className='col-md-7 text-center'>
            <img src={twiter} alt="" width={"50%"} />
          </div>
          <div className='col-md-5 mt-5'>
            <h1><b>Happening now</b></h1>
            <h6><b>Login</b></h6>
            <div className='mb-3 mt-3'>
              <input type="text" className='form-control' id="username" placeholder="Enter username" />
            </div>
            <div className='mb-3 mt-3'>
              <input type="password" className='form-control' id="username" placeholder="Enter Password" />
            </div>
            <div className='mb-3 mt-4'>
              <button type="button" className="btn btn-primary" id="username">Login</button>
            </div>
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
 