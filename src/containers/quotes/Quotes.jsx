import React, { useRef } from 'react';
import './Quotes.css';
import emailjs, {send}  from '@emailjs/browser';

const Quotes = () => {

  const form = useRef();

const sendEmail = (e) => {
   e.preventDefault();

  emailjs.sendForm('service_l8kc9lw', 'template_ipr6stf', form.current, 'DiwmszKjAXvh0r6uj')
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
    }, (error) => {
        console.log(error.text);
        console.log("server error");
    });
};

  
  return (
    <div className='quotes-container'>
      <div className='quotes-text-container'>
        <h1>Get a Free Quote</h1>
      </div>
        <form ref={form} onSubmit={sendEmail} className='quotes-form-container'>
          <div className='quotes-form-container-0'>
            <label>
            < input type='text' name='name' className='name' placeholder='Name...'/>
            </label>
            <label>
              <input type='text' name='last-name' className='last-name' placeholder='Last Name...' />
            </label>
          </div>
          <div className='quotes-form-container-1'>
            <label>
              <input type='tel'  name='telephone' className='telephone' placeholder='Phone Number...' />
            </label>
            <label>
              <input type='email' name='email' className='email' placeholder='Email...' />
            </label>
          </div>
          <label>
            <input type='text' name='message' className='message' placeholder='Message...' />
          </label>
          <label>
            <button type='submit' value={send} className='formsubmit'>Send Message →</button>
          </label>
        </form>
    </div>
  )
}

export default Quotes