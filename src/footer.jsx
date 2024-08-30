import "./index.css";


export default function Footer(){
  return(
    <>
     <div className="footer">
       
       <div className="footcontent">
    
        <p>
          <h1>Ventures</h1>
          <br />
          Travel with us...</p>
       </div>

        <div className="footcontent">
              <h6>Site Content</h6>
              <br />
              <ul>
                <li>Lorem ipsum </li>
                <br />
                <li>Lorem ipsum </li>
                <br />
                <li className="footexe">Lorem ipsum </li>
                <br />
                <li className="footexe">Lorem ipsum </li>
                <br />
                
              </ul>
        </div>


        <div className="footcontent footexe">

            <h6>Our Services</h6>
              <br />
              <ul>
                <li>Lorem ipsum </li>
                <br />
                <li>Lorem ipsum </li>
                <br />
                <li>Lorem ipsum </li>
                <br />
                <li>Lorem ipsum </li>
                <br />
                
              </ul>

        </div>


       <div className="footcontent footexe">
        
        <h6>Join Our Newsletter</h6>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br />elit. Aut veniam a provident cum <br />
        molestias accusamus id,</p>

       </div>
     </div>

    
    </>
  )
}