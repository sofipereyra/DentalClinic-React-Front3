import React from 'react'
import Form from '../Components/Form'
import { useGlobalContext } from '../Components/utils/global.context';

const Contact = () => {

  const {state} = useGlobalContext();
  
  return (
    <div className= {`form-container ${state.theme === "dark" ? "dark" : "light"}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact