import React from 'react'
import { useForm } from "react-hook-form";
import './contact.css'

function Contact() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
        <div className="form-wrapper" id="form">
        <form
          name="contact"
          type="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="text" name="name" placeholder="name"/>
          <button>Send</button>
        </form>
        </div>
    )
  }
export default Contact