import React, { useState } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import twitter from "../../assets/twitter-new-2023-x-logo-white-background-vector_1017-45422.avif";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/register', {
                email,
                password
            });
            
            setMessage(`Registration successful: ${response.data.message}`);
        } catch (error) {
            setMessage(error.response?.data.message || "Registration failed");
        }
    };

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
                <div className="row text-end">
                    <div className='col-md-6'>
                        <img src={twitter} alt="" width={"70%"} />
                    </div>
                    <div className='col-md-4 mt-5'>
                        <div className="row">
                            <div className='col-md-12'>
                                <h1><b>Happening now</b></h1>
                                <p className='text-center text-info' id='sign'><b>Signup</b></p>
                                
                                <form onSubmit={handleRegistration}>    
                                    <div className='col-md-12'>
                                        <input type="text" id='ipt' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className='col-md-12'>
                                        <input type="text" id='ipt' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className='col-md-12 mt-3'>
                                        <button id='ipt' className='bg-primary text-light' type="submit">Register</button>
                                    </div>
                                </form>

                                {message && <p>{message}</p>}
                                
                                <p id='Login'>Already have an account? <b onClick={handleHome} style={{ cursor: 'pointer' }}>Home</b></p>
                                <p id='Login'>Already have an account? <b onClick={handleLogin} style={{ cursor: 'pointer' }}>Login</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
