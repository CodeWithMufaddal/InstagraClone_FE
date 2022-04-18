import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="navbar__Logo">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram Logo" />
         </div>

         <div className="navbar__Search">
         <i className="fa-light fa-magnifying-glass "></i>
            <input className="navbar__SearchInput" type="search" placeholder="Search" />
         </div>

         <div className="Navbar__quickLinks">
            <Link to="/">
               <div className="HomePage">
                  <img className="postIcon" src="Icons/HomeDark.svg" alt="" srcset="" />
               </div>
            </Link>

            <Link to="/">
               <div className="Direct">
                  <img className="postIcon" src="Icons/DirectDark.svg" alt="" srcset="" />
               </div>
            </Link>
            <Link to="/">
               <div className="Post">
                  <img className="postIcon" src="Icons/AddPostDark.png" alt="" srcset="" />
               </div>
            </Link>
            <Link to="/">
               <div className="Explore">
                  <img className="postIcon" src="Icons/ExploreDark.png" alt="" srcset="" />
               </div>
            </Link>
            <Link to="/">
               <div className="LikesComments">
                  <img className="postIcon" src="Icons/HeartDark.png" alt="" srcset="" />
               </div>
            </Link>
            <Link to="/">
               <div className="Profile">
                  <img src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?w=202&h=211&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="Profile Pic" />
               </div>
            </Link>
         </div>
      </nav>
   )
}

export default Navbar