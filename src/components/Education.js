import React from "react";


function Education() {
  return (
    <>

    <div class="row">
      
      <div class="columnLED">
        <img style={{width:"390px"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/FS_wiki.png/800px-FS_wiki.png" alt="error loading media"/>
      </div>

      <div class="columnRED2">
        <h1 style={{fontSize:"23px"}}>Flatiron School | Denver, CO</h1>
        <h1 style={{fontSize:"20px"}}>Certificate -  Full Stack Software Engineering</h1>
        <h1 style={{fontSize:"18px"}}>September 2022 - January 2023</h1>
      </div>
    </div>

    <div  style={{marginLeft:"auto", marginRight:"auto", width:"80%", color:"lightgrey"}} className="divider"> | </div>

    <div class="row">

      <div class="columnLED">
        <br></br>
        <img style={{width:"350px"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/U.S._Military_Academy_Coat_of_Arms.svg/1200px-U.S._Military_Academy_Coat_of_Arms.svg.png" alt="error loading media"/>
      </div>
      <div class="columnRED">
        <h1 style={{fontSize:"23px"}}>United Stated Military Academy | West Point, NY</h1>
        <h1 style={{fontSize:"20px"}}>Bachelor of Science -  Systems Design and Management</h1>
        <h1 style={{fontSize:"18px"}}>June 2014 - December 2018</h1>
      </div>
    </div>

    </>
  );
}

export default Education;