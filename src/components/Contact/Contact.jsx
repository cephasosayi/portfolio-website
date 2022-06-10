import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../context';
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bu6v1t3', 'template_ao6bku1', form.current, '8rw8VF9yvHWgGeQ1G')
      .then((result) => {
        console.log(result.text);
        setDone(true)
        setHide(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form' id='Contact'>
        <div className="w-left">
        <div className="awesome text">
          <span style={{ color: darkMode? 'white' : ''}}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur" style={{ background: "#ABF1FF94"}}></div>
          </div>
        </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} className={hide && 'hideform'}>
          <input type='text' name='user_name' className='user' placeholder='Name' />
          <input type='email' name='user_email' className='user' placeholder='Email' />
          <textarea name='message' className='user' placeholder='Message' />
          <input type='submit' value='Send' className='button' />
          <div className="blur c-blur1" style={{ background: 'var(--purple)'}}></div>
        </form>
        <span style={{ marginTop: '50px'}}>{ done && " Thanks for contacting me. I will get back to you soon"}</span>
        </div>
    </div>
  )
}

export default Contact