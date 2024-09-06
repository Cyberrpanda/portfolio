import "./index.css";


export default function Footer(){
  return(
    <>
     <div className="footer">
       
       <div className="footcontent">
    
        <p>
          <h1>My Portfolio</h1>
          <br />
          I Guess 😂
          <br />
          <br />
          Work with me...</p>
       </div>

        <div className="footcontent">
              <h6>Contact Me</h6>
              <br />
              <ul>
                <a href="https://www.linkedin.com/in/ithiel-balogun-09aa87242"><li>Linkedln</li></a>
                <br />
                <a href="https://github.com/Cyberrpanda"><li>Github </li></a>
                
                <br />  
              </ul>
              <h6>Email:</h6>
              <p>ithielb9@gmail.com</p>
        </div>


        <div className="footcontent exempt">

            <h6>Page Content</h6>
              <br />
              <ul>
                <li>Home</li>
                <br />
                <li>About</li>
                <br />
                <li>Skills</li>
                <br />
                <li>Projects</li>
                <br />
                <li>Experience</li>
              </ul>

        </div>


       <div className="footcontent ">
        
        <span className="exempt">
        <h6>Location</h6>
        <br />
        <p>In case you're wondering i live in Lagos, Nigeria. <br />You'll find me probably bent over a screen staring 😂.  <br />
        This shouldn't bother you too much right.  </p>
        <br />
        </span>
        
        <h6>Phone Numbers:</h6>
        <p>Whatsapp Number: 08185817626</p>
        <p>Mobile Number: 09168728729</p>
       </div>
     </div>

    
    </>
  )
}