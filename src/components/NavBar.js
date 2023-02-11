import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <>  
        <Link className="link" to="/about"><button>About</button></Link>
    </>     
  )
}

export default NavBar;
