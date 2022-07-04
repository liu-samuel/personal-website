import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>liusamuelt@gmail.com</h5>
            <a href="mailto:liusamuelt@gmail.com">Send an email</a>
          </article>

          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>liusamuelt@gmail.com</h5>
            <a href="mailto:liusamuelt@gmail.com">Send an email</a>
          </article>

          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>liusamuelt@gmail.com</h5>
            <a href="mailto:liusamuelt@gmail.com">Send an email</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="text" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact