import { useEffect } from "react";
import "./index.css";

export default function Educate(){
    
    useEffect(() => {
        const cards = document.querySelectorAll(".ecards");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("slide-in-left-active");
              }
            });
          },
          {
            threshold: 0.2, // Adjust this value based on when you want the animation to trigger
          }
        );
    
        cards.forEach((card) => {
          observer.observe(card);
        });
    
        return () => {
          cards.forEach((card) => {
            observer.unobserve(card);
          });
        };
      }, []);
    


    return(
        <>
        <div className="educate">
                <h3>
                <i>EDUCATION</i>
                </h3>
                <br />
                <br />
                <div className="exp">
                    <div className="containers details">
                        <div className="ecards slide-in-left">
                        <div className="card-heads">
                        <h5>NIIT LIMITED</h5>

                        <small className="date">2023</small>
                        </div>    
                        
                          <small>Student Intern</small>

                          

                          <br /><br />
                          <p>
                          I began my Web Development journey here studying to earn a certification in Web Design and Development.
                          </p>
                        </div>
                    </div>

                    <div className="containers details">
                        <div className="ecards slide-in-left">
                         <div className="card-heads">
                         <h5>BSC. COMPUTER SCIENCE</h5>
                         <small className="date">2021 - 2024</small>
                        </div>   
                       
                          <small>Babcock University</small>
                          
                          

                          <br /><br />
                          <p>
                          I was able to achieve a childhood dream of Studying and Graduating with a degree in Computer Science , a course that believe it or not i've had a desire to study since my early primary education. I was fascinated by technology and knew from then that this was a field i could see myself in. While in school i was able to publish a paper on a topic of interest in the IJSRED Journal, work on some fun projects.   
                          </p>
                        </div>
                    </div>
                </div>    
          
                <h3>
                <i>PUBLICATIONS</i>
                </h3>
                <br />
                <br />
                <div className="certificate ">
                <iframe className=""
                    src="https://drive.google.com/file/d/1WSjDfJPJi9j4gfC_JhybkM2nKLKZw5ZM/preview
"
                    width="640"
                    height="450"
                    allow="autoplay"
                    title="Certificate PDF"
                    style={{ border: "none" }}>

                </iframe>
                <p>Certificate of Publication - Issued by International Journal <br /> of Scientific Research and Engineering Development (IJSRED)</p>
                </div>

        </div>
        </>
    )
}