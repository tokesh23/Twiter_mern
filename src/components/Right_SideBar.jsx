import React from 'react';
import "./Right.css";
import { CiSearch } from "react-icons/ci";

const Right_SideBar = () => {
  return (
    <div>
        <div className="container">
        <div className="row mt-3">
             <div className='col-md-12'><CiSearch id='searche'/><input className='bg-light' type="text" placeholder=" Search"id='ipt' /></div>
            <div className='col-md-12 bg-light mt-3 pt-2' id='content'>
              <h5 className='ml-4'> <b>Subscribe to Premium</b></h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, nihil. Lorem ipsum dolor sit amet.</p>
                <div><button type="button" class="btn btn-secondary" id='sub'>Subscribe</button></div>
            </div>
            <div className='col-md-12 bg-light mt-4 pt-2'>
                <h5 className='what'><b>What's happening</b> <img src="https://t3.ftcdn.net/jpg/00/33/55/28/360_F_33552873_UNLcGvI4XOASVSlgDNOhj8ZA9vbF7YxR.jpg" alt="" width={"15%"} id='happ' /></h5>
              <div >  <p className='mt-3'><b>Lorem ipsum dolor sit amet.2024</b></p></div>
                <p className='small'>Faishon - Live </p>
            </div>
            <div className='bg-light mt-4 pt-2'>
                <p>Lorem, ipsum dolor.</p>
                <h5> Lorem ipsum dolor sit amet .</h5>
                <p>Lorem ipsum.</p>
                <div className='mt-3'>
                    <p>Lorem, ipsum.</p>
                    <h5>Lorem ipsum dolor <span className='text-primary'>sit amet.</span></h5>
                </div>
                <div className='mt-4'>
                   <p>Lorem ipsum dolor sit amet.</p>
                   <h5>Lorem, ipsum.</h5>
                </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Right_SideBar