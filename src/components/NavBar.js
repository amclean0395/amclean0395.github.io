import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to="/"><button>Andrew McLean</button></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link style={{textDecoration:"none", fontSize:"18px"}} to="/projects">Projects</Link></li>
            <li><Link style={{textDecoration:"none", fontSize:"18px"}} to="/resume"><button>Resume</button></Link></li>
            <li><Link style={{textDecoration:"none", fontSize:"18px"}} to="/experience">Experience</Link></li>
            <li><Link style={{textDecoration:"none", fontSize:"18px"}} to="/education">Education</Link></li>
            <li><a href="https://medium.com/@andrew.mclean.5895">Personal Blog</a></li>
          </ul>
        </div>
      </div>  
    </>  
  )
}

export default NavBar;
