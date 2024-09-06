import "./index.css";
import 'animate.css';

export default function Lore() {

  const handleDownload = () => {
    
    const link = document.createElement('a');
    link.href = '/BALOGUN ITHIEL RESUME.pdf'; 
    link.download = '/BALOGUN ITHIEL RESUME.pdf';
    link.click(); 
  };

  return (
    <>
      <div className="lore" id="mylore">
        <h3>
          <i>A LITTLE ABOUT ME</i>
        </h3>
        <br />
        <br />
        <div className="content">
          <img src="/display.jpeg" className="id-picture" alt="id" />

          <div className=" container details">
            <div className="cards">
            Hey there , fellow tech enthusiast. I’m Ithiel a front-end software engineer (for now) 😂 , with a Major in Computer Science . I have built a number of projects that have been showcased in this portfolio but those aren’t the full extent of my abilities I assure you. I am always willing and accustomed to learn new things and pickup and adopt new frameworks and libraries out of curiosity or as the Job or task requires 🌚 . I hope to share my ideas and creations with the world one day and I hope you get to experience the enthusiasm this industry brings me . I am currently expanding my knowledge in backend development to broaden my expertise in fullstack development with active plans to delve into another field of development on completion of that.
                <br /><br />
                <button 
                className="custom-btn btn-12" 
                onClick={handleDownload}
                >
                  <span>Hi</span><span>Download CV</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
