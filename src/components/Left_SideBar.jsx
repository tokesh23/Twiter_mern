import React, { useState } from 'react';
import './left.css';
import twitter from '../assets/image.png'; // Corrected variable name
import { FaHome } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { IoIosNotifications } from 'react-icons/io';
import { CiMail } from 'react-icons/ci';
import { FaCampground } from 'react-icons/fa';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { RxCross1 } from 'react-icons/rx';
import { CiUser } from 'react-icons/ci';
import { IoIosAdd } from 'react-icons/io';
import { CiCircleMore } from 'react-icons/ci';
import { IoReorderThree } from "react-icons/io5";

const Left_SideBar = () => {
  // const [isOpen, setIsOpen] = useState(false); // Initialize sidebar state

  // const sidebarToggle = () => {
  //   setIsOpen((prev) => !prev); // Toggle sidebar open/close
  // };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
         
          
          
          {/* <div onClick={sidebarToggle} className="toggle-btn"> */}
          <img src={twitter} alt="Twitter Logo" width={"15%"} />
          {/* </div> */}

          {/* Sidebar content */}
          <div className="">
            <div className="mt-3" id="gap">
              <FaHome />
              <b>Home</b>
            </div>
            <div id="gap" className="mt-2">
              <CiSearch />
              Explorer
            </div>
            <div id="gap" className="mt-2">
              <IoIosNotifications />
              Notification
            </div>
            <div id="gap" className="mt-2">
              <CiMail />
              Message
            </div>
            <div id="gap" className="mt-2">
              <FaCampground />
              Gork
            </div>
            <div id="gap" className="mt-2">
              <LiaClipboardListSolid />
              List
            </div>
            <div id="gap" className="mt-3">
              <RxCross1 />
              Premium
            </div>
            <div id="gap" className="mt-3">
              <CiUser />
              Profile
            </div>
            <div id="gap" className="mt-3">
              <CiCircleMore />
              More
            </div>

            <div className="mt-3">
              <button type="button" className="btn btn-primary" id="btn">
                Post
              </button>
            </div>
            <div id="gap" className="mt-3">
              <IoIosAdd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left_SideBar;
