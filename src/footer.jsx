import "./index.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footcontent">
          <h1>My Portfolio</h1>
          <p>I Guess 😂<br /> Work with me...</p>
        </div>

        <div className="footcontent">
          <h6>Contact Me</h6>
          <ul>
            <li><a href="https://www.linkedin.com/in/ithiel-balogun-09aa87242">LinkedIn</a></li>
            <li><a href="https://github.com/Cyberrpanda">Github</a></li>
          </ul>
          <h6>Email:</h6>
          <p>ithielb9@gmail.com</p>
          <h6>Phone Numbers:</h6>
          <p>Whatsapp Number: 08185817626</p>
          <p>Mobile Number: 09168728729</p>
        </div>

        <div className="footcontent exempt">
          <h6>Page Content</h6>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Experience</li>
          </ul>
        </div>

        <div className="footcontent exempt">
          <h6>Location</h6>
          <p>
            In case you're wondering, I live in Lagos, Nigeria. <br />
            You'll find me probably bent over a screen staring 😂. <br />
            This shouldn't bother you too much, right?
          </p>
        </div>
      </footer>
    </>
  );
}
