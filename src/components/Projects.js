import React from "react";


function Projects() {
  return (
    <>
    <br></br>
      <div class="row">

        <div class="columnPL">
        <img style={{borderRadius: "10px", width: "100%",  minHeight:"350px"}} src="https://i.imgur.com/6101jFd.png" alt="error loading media"></img>
        <br></br>
        </div>

        

        <div class="columnPR" >
          <div style={{gridRow:"1"}}>
            <h1 style={{fontSize:"30px"}}>goose Wallet</h1>
          </div>

          <div style={{gridRow:"2"}}>
            <p>Travel app that allows users to browse popular destinations by country or continent and incorporates a blog, forum, and an e-commerce store for travel guides.
            Travel app that allows users to browse popular destinations by country or continent and incorporates a blog, forum, and an e-commerce store for travel guides.
            Travel app that allows users to browse popular destinations by country or continent and incorporates a blog, forum, and an e-commerce store for travel guides.
            </p>
          </div>

          <div className="containerProjects" >
            <div>
            <img style={{borderRadius: "5px", margin:"7px", }} width="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="error loading media"></img>
            </div>

            <div>
            <img style={{borderRadius: "5px", margin:"7px"}} width="45px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="error loading media"></img>
            </div>

            <div>
            <img style={{borderRadius: "5px", margin:"7px"}} width="45px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="error loading media"></img>
            </div>

            <div>
            <img style={{borderRadius: "5px", margin:"7px" }} width="45px" src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg" alt="error loading media"></img>
            </div>

            <div>
            <img style={{borderRadius: "5px", margin:"7px"}} width="45px" src="https://www.ruby-lang.org/images/header-ruby-logo.png" alt="error loading media"></img>
            </div>

            <div>
            <img style={{borderRadius: "5px", margin:"7px"}} width="45px" src="https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png" alt="error loading media"></img>
            </div>

            <div>
            <img style={{borderRadius: "5px", margin:"7px"}} width="45px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="error loading media"></img>
            </div>
          </div>  

          <div style={{marginRight:"auto", marginLeft:"auto"}}>
            <div style={{float:"left", width:"70px", paddingTop:"10px"}}>
              <button  className="btn btn-sm btn-outline btn-secondary"><a href="https://www.loom.com/share/05e3a60268104729abb22bdc1c492c96">Demo</a></button>
            </div>

            <div style={{float:"left", paddingLeft:"10px", paddingTop:"10px"}}>
              <button className="btn btn-sm btn-outline btn-secondary"><a href="https://github.com/amclean0395/Goose-Wallet">Source Code</a></button>
            </div>
          </div>

        </div>

        
      </div>

      <div style={{marginLeft:"auto", marginRight:"auto", width:"80%", color:"lightgrey", paddingTop:"40px"}} className="divider"> | </div>
      <br></br>
      <br></br>
      <p style={{textAlign:"center", fontSize:"25px"}} >Check back soon for more projects!</p>
   </>
  );
}

export default Projects;
