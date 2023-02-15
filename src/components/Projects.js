import React from "react";


function Projects() {
  return (
    <>
      <div>
        <img style={{borderRadius: "10px", width: "40%", boxShadow:"3px solid red" }} src="https://i.imgur.com/6101jFd.png" alt="error loading media"></img>
        
        <h1>goose Wallet</h1>
        <p>Travel app that allows users to browse popular destinations by country or continent and incorporates a blog, forum, and an e-commerce store for travel guides.</p>

        <div className="containerProjects">
          <div>
          <img style={{borderRadius: "5px", margin:"7px"}} width="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="error loading media"></img>
          </div>

          <div>
          <img style={{borderRadius: "5px", margin:"7px"}} width="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="error loading media"></img>
          </div>

          <div>
          <img style={{borderRadius: "5px", margin:"7px"}} width="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="error loading media"></img>
          </div>

          <div>
          <img style={{borderRadius: "5px", margin:"7px" }} width="40px" src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg" alt="error loading media"></img>
          </div>

          <div>
          <img style={{borderRadius: "5px", margin:"7px"}} width="40px" src="https://www.ruby-lang.org/images/header-ruby-logo.png" alt="error loading media"></img>
          </div>

          <div>
          <img style={{borderRadius: "5px", margin:"7px"}} width="40px" src="https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png" alt="error loading media"></img>
          </div>

          <div>
          <img style={{borderRadius: "5px", margin:"7px"}} width="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="error loading media"></img>
          </div>
        </div>  

        <div style={{display:"inline-flex", marginLeft:"auto", marginRight:"auto", textAlign:"center"}}>
          <button className="btn btn-sm btn-outline btn-secondary"><a href="https://www.loom.com/share/05e3a60268104729abb22bdc1c492c96">Demo</a></button>
          <br></br>
          <button className="btn btn-sm btn-outline btn-secondary"><a href="https://github.com/amclean0395/Goose-Wallet">Source Code</a></button>
        </div>

        <div  style={{marginLeft:"auto", marginRight:"auto", width:"80%", color:"lightgrey"}} className="divider"> | </div>
        <br></br>
        <p style={{textAlign:"center", fontSize:"25px"}} >Check back soon for more projects!</p>

      </div>
   </>
  );
}

export default Projects;
