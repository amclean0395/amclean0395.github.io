import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
        <div>  
            <Link className="link" to="/"><button>Andrew McLean</button></Link>
            <Link className="link" to="/projects"><button>Projects</button></Link>
            <Link className="link" to="/resume"><button>Resume</button></Link>
            <Link className="link" to="/experience"><button>Experience</button></Link>
            <Link className="link" to="/education"><button>Education</button></Link>
            <a href="https://medium.com/@andrew.mclean.5895">Personal Blog</a>
        </div>     
  )
}

export default NavBar;
