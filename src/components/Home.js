import React from "react";


function Home() {
  return (
    <>
    <div>
            <div className="aboutHeader">
                <br></br>
                <img style={{boxShadow: "0 0 0 8px white, 0 0 0 9px lightgray"}} width="175px" height="175" class="rounded-full" src="https://d1c2gz5q23tkk0.cloudfront.net/assets/users/3127774/ec50b29eaddf279bce3287003d541928-large.jpg?1675801440" alt="error loading media"></img>
                <br></br>
                <p style={{fontSize:"40px", textAlign:"center"}}>Andrew McLean</p>
                <p style={{fontSize:"30px", textAlign:"center", paddingBottom:"5px"}}>Full-Stack Software Engineer</p>
            </div>
            <p class="font-sans" style={{fontSize:"25px", textAlign: "center", paddingTop: "10px"}}>Technical Skills</p>
            <div className="container">

                <div>
                <p>JavaScript</p>
                <img style={{borderRadius: "10px"}} width="50px" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="error loading media"></img>
                </div>

                <div>
                <p style={{width:"75px"}} >React</p>
                <img style={{borderRadius: "10px"}} width="50px" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="error loading media"></img>
                </div>

                <div>
                <p style={{width:"75px"}}>CSS</p>
                <img style={{borderRadius: "10px"}} width="50px"   src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="error loading media"></img>
                </div>

                <div>
                <p style={{width:"75px"}}>Ruby</p>
                <img style={{borderRadius: "10px"}} width="50px" src="https://www.ruby-lang.org/images/header-ruby-logo.png" alt="error loading media"></img>
                </div>

                <div>
                <p style={{width:"75px"}}>Rails</p>
                <img style={{borderRadius: "10px"}} width="50px"  src="https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png" alt="error loading media"></img>
                </div>

                <div>
                <p style={{width:"75px"}}>Tailwind</p>
                <img style={{borderRadius: "10px" }} width="50px"  src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg" alt="error loading media"></img>
                </div>

                <div>
                <p style={{width:"75px"}}>HTML</p>
                <img style={{borderRadius: "10px", height:"50px"}} width="50px" src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="error loading media"></img>
                </div>

                <div>
                <p style={{width:"75px"}}>git</p>
                <img width="50px" src="https://git-scm.com/images/logos/logomark-orange@2x.png" alt="error loading media"></img>            
                </div>

                <div>
                <p style={{width:"75px"}}>GitHub</p>
                <img style={{borderRadius: "10px"}} width="50px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="error loading media"></img>
                </div>
            </div>    
    </div>
    <div className="homeBottom">
        <div className="aboutME">
            <p style={{fontSize:"25px"}}>About me</p>
            <p>Andrew McLean loves ..... Thank you for taking the time to view my portfolio!</p>
            <br></br>
        </div>
        <div style={{paddingTop:"10px", display:"inline"}} className="contact">
            <p style={{fontSize:"25px", paddingLeft: "25px", paddingBottom:"7px"}}>Contact</p>

            <div style={{paddingLeft: "33px"}}>
                <a href="mailto: andrew.mclean.5895@gmail.com">
                    <li style={{display:"inline-flex"}}>
                        <img style={{borderRadius: "10px", height:"30px"}} width="30px"  src="https://static.vecteezy.com/system/resources/previews/000/547/340/original/envelope-mail-icon-vector-illustration.jpg" alt="error loading media"></img>
                        <ul style={{marginTop:"auto", marginBottom:"auto", marginLeft:"10px", width:"75px"}}>Email</ul>
                    </li>
                </a>
            </div>

            <div style={{paddingLeft: "33px"}}>
                <a href="https://www.linkedin.com/in/andymclean95/">
                    <li style={{display:"inline-flex"}}>
                        <img style={{borderRadius: "10px"}} width="30px"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="error loading media"></img>
                        <ul style={{marginTop:"auto", marginBottom:"auto", marginLeft:"10px", width:"75px"}}>LinkedIn</ul>
                    </li>
                </a>
            </div>

            <div style={{paddingLeft: "33px"}}>
                <a href="https://github.com/amclean0395">
                    <li style={{display:"inline-flex"}}>
                        <img style={{borderRadius: "10px"}} width="30px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="error loading media"></img>
                        <ul style={{marginTop:"auto", marginBottom:"auto", marginLeft:"10px", width:"75px"}}>GitHub</ul>
                    </li>
                </a>
            </div>

        </div>
    </div>

   </>
  );
}

export default Home;