import { useEffect } from "react";
import "./index.css";

export default function Reason(){

    useEffect(() => {
        const cards = document.querySelectorAll(".cardsx");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("slide-in-left-active");
              }
            });
          },
          {
            threshold: 0.1, // Lower threshold for better mobile experience
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
    
    return (
        <div className="reason" id="reason">
            <h3 className="reason-title"> 
                <i>EXPERIENCE</i>
            </h3>
            
            <div className="exp">
                <div className="experience-item">
                    <div className="cardsx slide-in-left">
                        <div className="card-heads">
                            <h5 className="company-name">EKO ELECTRICITY DISTRIBUTION PLC</h5>
                            <small className="date">JUN 2025 - PRESENT</small>
                        </div>    
                        
                        <small className="job-title">IT Operations Specialist</small>

                        <div className="job-description">
                            <p>
                                As an IT Operations Specialist at Eko Electricity Distribution Plc, I manage and support the company's IT infrastructure, including servers, networks, and critical applications like billing and smart meter systems. I provide technical support, maintain system security, and assist in ensuring operational continuity for technologies such as SCADA and GIS. My role involves resolving user issues, supporting data backup and recovery, and contributing to the overall efficiency and reliability of EKEDC's IT environment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="cardsx slide-in-left">
                        <div className="card-heads">
                            <h5 className="company-name">TUNKEN ELEVATORS</h5>
                            <small className="date">SEP 2023 - OCT 2023</small>
                        </div>   
                       
                        <small className="job-title">FreeLancer</small>
                        
                        <div className="job-description">
                            <p>
                                I developed a fully responsive website showcasing the company's services using Html and Bootstrap CSS.
                                I Collaborated with the client to refine the UI/UX, ensuring a seamless user experience i additionally
                                provided support and recommendations for website optimization.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="cardsx slide-in-left">
                        <div className="card-heads">
                            <h5 className="company-name">NIIT LIMITED</h5>
                            <small className="date">JAN 2023 - JUN 2023</small>
                        </div>    
                        
                        <small className="job-title">Student Intern</small>

                        <div className="job-description">
                            <p>
                                Embarked on a six month internship training with the aim of familiarizing myself with the Tech Industry and gaining the skills necessary to make a career in this industry.
                                During this six month period I built a car dealership site, a site for a travel agency and the first of many iterations of my portfolio site among other projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}