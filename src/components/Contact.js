import React from 'react'
import { useForm } from "react-hook-form";
import './contact.css'

function Contact() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
        <div className="form-wrapper" id="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Example</label>
          <input name="example" defaultValue="test" ref={register} />
          <label>ExampleRequired</label>
          <input
            name="exampleRequired"
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.exampleRequired && <p>This field is required</p>}
          <input type="submit" />
        </form>
        </div>
    )
  }
export default Contact