import React from 'react'
import "./Feed.css"
import { AiOutlineLike } from "react-icons/ai";


const Feed = () => {
  return (
    <div>
       
        <div className="row">
          <div className='col-md-8'id='curser'><p><b>For You</b></p></div>
          <div className='col-md-4'id='curser'>Following</div>
        </div>
      <div className='col-md-12' id='msg'>
       <div className='msg'> <img id='ima' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ssNpe4rwNd91zmMcq02ZKgZQh_x1JMkh9w&s" alt=""width={"5%"} />
       
       </div>
      <p>What is happing?</p>
     
       </div>
       <div className='icons'>
        <div className=''>
          {/* icons */}
          <AiOutlineLike/>
          
        </div>
        {/* post */}
      </div>
    </div>
  )
}

export default Feed