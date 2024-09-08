import React from "react";
import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Showcase() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    speed: 500,
    responsive:[
      {
        breakpoint: 1050,
        settings:{
          slidesToShow: 1,
          centerMode: true,
          arrows: true,
        }  
      },

      {
        breakpoint: 820,
        settings:{
          slidesToShow: 1,
          centerMode: true,
          arrows: true,
        }  
      },

      {
        breakpoint: 768,
        settings:{
          slidesToShow: 1,
          centerMode: true,
          arrows: true,
        }  
      },

      {
        breakpoint: 480,
        settings:{
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 375,
        settings:{
          slidesToShow: 1,
          centerMode: true,
          arrows: true,
        }  
      }
      
    ]
  };

  

  return (
    <>
      <div className="show" id="showcase">
        <h3>
          <i> FEATURED WORK</i>
        </h3>
        <br />
        <br />
        <div className="slides ">
           <div className="slider-container">
        <Slider {...settings}>
          <div>
            <a href="https://medibridge-ty1l.onrender.com">
            <img src="../medibridge.png" alt="m1" />
            </a>
          </div>
          <div>
            <a href="https://tunken-project.onrender.com">
            <img src="../tunken.png" alt="m2" />
            </a>
          </div>
          <div>
            <img src="../ventures.png" alt="m3" />
          </div>
          <div>
            <img src="../heavy.png" alt="m4" />
          </div>
          <div>
            <img src="../tickfare.png" alt="m5" />
          </div>
          
        </Slider>
      </div>
        </div>
      </div>
    </>
  );
}
