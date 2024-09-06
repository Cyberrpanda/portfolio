import "./index.css";

export default function Contact() {
  return (
    <>
      <div className="contact" id="contactinfo">
        <h3>
          <i>GET IN TOUCH</i>
        </h3>
        <br />
        <br />
      
        <div className="contact-right">
        <form action="https://formspree.io/f/movabjyp" method="post">
        <div className="flex-inputs">
            <div className="top-inputs">
              <label htmlFor="firstname">First Name</label>
              <input name="required" type="text" className="contact-input" id="firstname" />
            </div>
            <div className="top-inputs">
              <label htmlFor="lastname">Last Name</label>
              <input name="required" type="text" className="contact-input" id="lastname" />
            </div>
            <div className="top-inputs">
              <label htmlFor="email">Email</label>
              <input  type="text" className="contact-input" id="email" />
            </div>
          </div>
          <div className="top-inputs">
            <label htmlFor="message">Message</label>
            <textarea name="required" id="message" className="message-box"></textarea>
          </div>
          <button className="form-submit">Send</button>
        </form>

          
        </div>
      </div>
    </>
  );
}
