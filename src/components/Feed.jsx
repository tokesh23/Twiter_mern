import React from 'react'
import "./Feed.css"
import { AiOutlineLike } from "react-icons/ai";
import { FcComments } from "react-icons/fc";
import { CiBookmark } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { LuMessageCircle } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";





const Feed = () => {
  return (
    <div className='bg-light text-center'>
       
        <div className="row ">
          <div className='col-md-8'id='curser'><p><b>For You</b></p></div>
          <div className='col-md-4'id='curser'>Following</div>
        </div>
      <div className='col-md-12' id='msg'>
       <div className='msg'> <img id='ima' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ssNpe4rwNd91zmMcq02ZKgZQh_x1JMkh9w&s" alt=""width={"5%"} />
       
       </div>
      <p>What is happing?</p>
     
       </div>
       <div className='icons'>
        <div className='icon'>
          {/* icons */}
          <AiOutlineLike/>
          <FcComments />
          < CiBookmark  />
          <CiLocationOn />


        </div>
        {/* post */}
        <div><h5 className='text-white'id='post'>Post</h5></div>
   
      </div>
      <div className="row">
        <div className='col-md-12'>
        <div className='message'> 
          <div className='user'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTGOwZbJRy9bmvEJpmMuGw_WW-AzAJKQM0Q&s" alt="" width={"8%"}id='img-user'/>
            <b>Shriang Yadaw </b><p><span>Lorem, ipsum.:2h</span></p><br />
           
          </div>
          <div>...</div>
        </div>
        <p id="clg">in my college,female infoshipn are  dolor sit amet consectetur.</p>

        </div>
       
      <div className='col-md-11'>
          
      <div className='icon-commit'>
       <div> <LuMessageCircle />0</div>
       <div> <CiHeart />0</div>
       <div> < CiBookmark  />0</div>

          
        </div>
        
      </div>
     <div className="row mt-3">
      <div className='col-md-12'>
      <div className='message'> 
      <div className='user'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTGOwZbJRy9bmvEJpmMuGw_WW-AzAJKQM0Q&s" alt="" width={"8%"}id='img-user'/>
            <b>Shriang Yadaw </b><p><span>Lorem, ipsum.:2h</span></p><br />
           
          </div>
          <div>...</div>
        </div>
        <p id="clg">in my college,female infoshipn are  dolor sit amet consectetur.</p>
        <div className='col-md-11'>
          
          <div className='icon-commit'>
           <div> <LuMessageCircle />0</div>
           <div> <CiHeart />0</div>
           <div> < CiBookmark  />0</div>
    
              
            </div>
            </div>
        <div className="row mt-4">
      <div className='col-md-12'>
      <div className='message'> 
      <div className='user'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTGOwZbJRy9bmvEJpmMuGw_WW-AzAJKQM0Q&s" alt="" width={"8%"}id='img-user'/>
            <b>Shriang Yadaw </b><p><span>Lorem, ipsum.:2h</span></p><br />
           
          </div>
          <div>...</div>
        </div>
        <p id="clg">in my college,female infoshipn are  dolor sit amet consectetur.</p>
        <div className='col-md-11'>
          
          <div className='icon-commit'>
           <div> <LuMessageCircle />0</div>
           <div> <CiHeart />0</div>
           <div> < CiBookmark  />0</div>
    
              
            </div>
            </div>
            </div>
            </div>
     
      </div>
     </div>
      </div>
      
    </div>
  )
}

export default Feed


 {/* <div className='col-md-12 ml-3'id='commit'>
          <p >Lorem, ipsum dolor sit amet consectetur adipisicing . <br />name</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          
        </div> */}