import "./index.css";
import React, { useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Stack() {
  
  const divisionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.4 } // Adjust the threshold as needed
    );

    const divisions = divisionsRef.current;
    divisions.forEach((division) => {
      if (division) {
        observer.observe(division);
      }
    });

    return () => {
      divisions.forEach((division) => {
        if (division) {
          observer.unobserve(division);
        }
      });
    };
  }, []);

   

  return (
    <>
      <div className="stack" id="stack">
        <h3>
          <i>
            MY <br /> SKILLS
          </i>
        </h3>
        <br />
        <div className="skills">
          <div className="division"  ref={(el) => (divisionsRef.current[0] = el)}>
                <div class="skillBar">
                <h4>Html</h4>
                <div class="skillBarContainer">
                    <div class="skillBarValue value-90"></div>
                </div>
                </div>

                <div class="skillBar">
                <h4>Css3</h4>
                <div class="skillBarContainer">
                    <div class="skillBarValue value-90"></div>
                </div>
                </div>

                <div class="skillBar">
                <h4>Bootstrap</h4>
                <div class="skillBarContainer">
                    <div class="skillBarValue value-90"></div>
                </div>
                </div>

                <div class="skillBar">
                <h4>ReactJs</h4>
                <div class="skillBarContainer">
                    <div class="skillBarValue value-70"></div>
                </div>
                </div>

                <div class="skillBar">
                    <h4>MongoDB</h4>
                    <div class="skillBarContainer">
                    <div class="skillBarValue value-30"></div>
                    </div>
                </div>

                <div class="skillBar">
                    <h4>Git/GitHub</h4>
                    <div class="skillBarContainer">
                    <div class="skillBarValue value-70"></div>
                    </div>
                </div>
            </div>
         
 
         <div className="division"  ref={(el) => (divisionsRef.current[1] = el)}>
            <div class="skillBar">
                    <h4>JavaScript</h4>
                    <div class="skillBarContainer">
                    <div class="skillBarValue value-20"></div>
                    </div>
                </div>

                <div class="skillBar">
                    <h4>NodeJs</h4>
                    <div class="skillBarContainer">
                    <div class="skillBarValue value-30"></div>
                    </div>
                </div>

                <div class="skillBar">
                    <h4>SwiperJs</h4>
                    <div class="skillBarContainer">
                    <div class="skillBarValue value-80"></div>
                    </div>
                </div>

                <div class="skillBar">
                    <h4>ExpressJs</h4>
                    <div class="skillBarContainer">
                    <div class="skillBarValue value-40"></div>
                    </div>
                </div>

                <div class="skillBar">
                    <h4>MySQL Workbench</h4>
                    <div class="skillBarContainer">
                    <div class="skillBarValue value-80"></div>
                    </div>
                </div>

                <div class="skillBar">
                    <h4>Google Maps Api</h4>
                    <div class="skillBarContainer">
                    <div class="skillBarValue value-80"></div>
                    </div>
                </div>
            </div>
            </div>  
      </div>
    </>
  );
}
