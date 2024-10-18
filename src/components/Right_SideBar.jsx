import React from 'react';
import "./Right.css";
import { CiSearch } from "react-icons/ci";

const Right_SideBar = () => {
  return (
    <div>
        <div className="container">
        <div className="row mt-3">
             <div className='col-md-12'><CiSearch id='searche'/><input className='bg-light' type="text" placeholder=" Search"id='ipt' /></div>
             
        </div>
        </div>
        <div className="row bg-light mt-3 text-center">
          <div className='col-md-12 text-start'>
            <h5><b>Who is follow</b></h5>
            <div id='followers'>
              <div className="row mt-2 ">
              <div className='col-md-8 'id='div-profile'>
                <img src="https://www.shutterstock.com/image-photo/portrait-handsome-20-years-old-260nw-2270918573.jpg" alt="" id='foll-img' width={"25%"} />
                 <div className='col-md-'> <p><b>Patel</b></p>
                 <p id='gmail'>@gmail.com hi you</p>
                  
                 
                 </div>
                 
              </div>
              <div className='col-md-2'>
                <button id="btn">Profle</button>
              </div>
              </div>
            </div>
            <h5><b>Who is follow</b></h5>
            <div id='followers'>
              <div className="row mt-2 ">
              <div className='col-md-8 'id='div-profile'>
                <img src="https://www.shutterstock.com/image-photo/portrait-handsome-20-years-old-260nw-2270918573.jpg" alt="" id='foll-img' width={"25%"} />
                 <div className='col-md-'> <p><b>Patel</b></p>
                 <p id='gmail'>@gmail.com hi you</p>
                  
                 
                 </div>
                 
              </div>
              <div className='col-md-2'>
                <button id="btn">Profle</button>
              </div>
              </div>
            </div>
            <h5><b>Who is follow</b></h5>
            <div id='followers'>
              <div className="row mt-2 ">
              <div className='col-md-8 'id='div-profile'>
                <img src="https://www.shutterstock.com/image-photo/portrait-handsome-20-years-old-260nw-2270918573.jpg" alt="" id='foll-img' width={"25%"} />
                 <div className='col-md-'> <p><b>Patel</b></p>
                 <p id='gmail'>@gmail.com hi you </p>
                  
                 
                 </div>
                 
              </div>
              <div className='col-md-2'>
                <button id="btn">Profle</button>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Right_SideBar