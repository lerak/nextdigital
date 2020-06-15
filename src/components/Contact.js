import React from 'react'
import { useForm } from "react-hook-form";
import './contact.css'

function Contact() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
        <div className="form-wrapper" id="form">
          <h4>Contacto</h4>
        <form 
          name="contact"
          type="post"
          data-netlify="true"
          
        >
          <input type="hidden" name="contact-form" />
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" placeholder="Nombre"/>
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" placeholder="email@email.com"/>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea name="text" placeholder="Mensaje" cols="30" rows="10"></textarea>
          <button>Enviar</button>
        </form>
        </div>
    )
  }
export default Contact