 import React from 'react'
 import "./Register.css"
 import { useNavigate } from 'react-router-dom'
 import twitter from "../../assets/twitter-new-2023-x-logo-white-background-vector_1017-45422.avif"
 
 const Registraion = () => {
        const navigate = useNavigate()

        const handleHome=()=>{
            navigate('/home')
        }
        

        const handleLogin=()=>{
            navigate('/login')
        }
        


   return (
    <div className="d-flex justify-content-center align-items-center vh-100">

        <div className="container">
            <div className="row text-end">
                <div className='col-md-6 '>
                    <img src={twitter} alt="" width={"70%"}/>
                </div>
                <div className='col-md-4 mt-5'>
                    <div className="row">
                        <div className='col-md-12'>
                            <div className='col-md-12'>
                               <h1><b> Happening  now </b></h1>
                                <p className='text-center text-info'id='sign'><b>Singup</b></p>
                               <div className='col-md-12'><input type="text"id='ipt' placeholder='Enter Name'/></div>
                               <div className='col-md-12'><input type="text"id='ipt' placeholder='UserName' /></div>
                               <div className='col-md-12 '><input type="text" id='ipt' placeholder='Email' /></div>
                               <div className='col-md-12 '><input type="text"id='ipt' placeholder='Password'/></div>
                               <div className='col-md-12 mt-3'><button id='ipt' className='bg-primary text-light'>create an Account</button></div>

                               <p id='Login'>Already have an account ? <b onClick={handleHome} style={{cursor:'pointer'}}>Home</b></p>
                               <p id='Login'>Already have an account ? <b onClick={handleLogin} style={{cursor:'pointer'}}>Login</b></p>
                              


                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
        </div>

     </div>
   )
 }
 
 export default Registraion