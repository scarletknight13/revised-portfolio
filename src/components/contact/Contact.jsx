import React, { useRef } from 'react';
import './contact.css'
import emailjs from 'emailjs-com'
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ae30rnl', 'template_1lpn51d', form.current, 'EZGpvYazKbkOBw81r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Let's Talk</h2>
      <div className="container contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='send-btn btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact