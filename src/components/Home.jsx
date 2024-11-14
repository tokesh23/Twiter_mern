import React from 'react'
import Left_SideBar from "./Left_SideBar";
import Feed from "./Feed";
import Right_SideBar from "./Right_SideBar";
import "../Home.css"


const Home = () => {
  return (
    <div>
        <div className="container">
            <div className="row bg mt-5">
                <div className='col-md-2'> <Left_SideBar/></div>
                <div className='col-md-6'>   <Feed/></div>
                <div className='col-md-3'> <Right_SideBar/></div>
            </div>
            
        </div>

       
     
       
    </div>
  )
}

export default Home