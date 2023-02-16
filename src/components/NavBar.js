import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to="/"><button>Andrew McLean</button></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link style={{textDecoration:"none", fontSize:"18px"}} to="/projects">Projects</Link></li>
            <li><Link style={{textDecoration:"none", fontSize:"18px"}} to="/experience">Experience</Link></li>
            <li><Link style={{textDecoration:"none", fontSize:"18px"}} to="/education">Education</Link></li>
            <li><a style={{fontSize:"18px"}} href="http://andrewmclean.dev/Resume/" >Resume</a></li>
            <li><a style={{fontSize:"18px"}} href="https://medium.com/@andrew.mclean.5895">Blog</a></li>
          </ul>
        </div>
      </div>  
    </>  
  )
}

export default NavBar;
