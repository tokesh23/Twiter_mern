import React from 'react';
import './Login.css'
import twiter from "../../assets/twitter-new-2023-x-logo-white-background-vector_1017-45422.avif"

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row g-0 ">
          <div className='col-md-8 text-center '>
            <img src={twiter} alt="" width={"50%"} />
          </div>
          <div className='col-md-4 '>
            <h1><b>𝙃𝙖𝙥𝙥𝙚𝙣𝙞𝙣𝙜 𝙣𝙤𝙬</b></h1>
            <h6><b>Login</b></h6>
            <div className='mb-3 mt-3'>
              
              <input type="text" className='form-control' id="username" placeholder="Enter username" />
            </div>
            <div className='mb-3 mt-3'>
              
              <input type="text" className='form-control' id="username" placeholder="Enter Password" />
            </div>
            <div className='mb-3 mt-4 '>
            <button type="button" class="btn btn-primary" id="username">Login</button>
              
            </div>
            <div className='mb-3 mt-4 '>
             <p>Do not have an account ? <b>Register</b></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
