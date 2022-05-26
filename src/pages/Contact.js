import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Contact'
import { motion } from "framer-motion"

const Contact = () => {
  const defFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const [ formData, setFormData ] = useState(defFormData)
  const [ showEmailAlert, setShowEmailAlert ] = useState(false)
  const [ showSent, setShowSent ] = useState(false)

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleEmailInput = () => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(formData.email)) {
      setShowSent(true)
      setShowEmailAlert(false);
      setFormData(defFormData)
    } else {
      setShowSent(false)
      setShowEmailAlert(true);
    }
        
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleEmailInput();
  }
  
  return (
    <Wrapper>
      <motion.div 
        className='container'
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0 }}
      >
        <div className='content'>
            <div className='content-box text'>
              <h3>Contact</h3>
              <p>For all pricing and booking inquiries , please fill out the form below. Please include as much relevant information as possible.</p>
              <form onSubmit={handleFormSubmit}>
                <div className='form-control'>
                  <label>Name *</label>
                  <input
                    name='name'
                    onChange={handleInputChange}
                    value={formData.name}
                    required 
                  />
                </div>
                <div className='form-control'>
                  <label>Email *</label>
                  <input
                    name='email'
                    onChange={handleInputChange}
                    value={formData.email}
                    required 
                  />
                  {showEmailAlert && <span>Please enter a valid email.</span>}  
                </div>
                <div className='form-control'>
                  <label>Subject *</label>
                  <input
                    name='subject'
                    onChange={handleInputChange}
                    value={formData.subject}
                    required 
                  />
                </div>
                <div className='form-control'>
                  <label>Message *</label>
                  <textarea
                    name='message'
                    rows='10'
                    onChange={handleInputChange}
                    value={formData.message}
                    required 
                  >
                  </textarea>
                </div>
                {showSent && (
                  <div className='success-alert'>
                  Thank you for contacting Jacob Sanders. We will get back to you within 24 hours.
                  </div>
                )}
                <button>Submit</button>
              </form>
            </div>
        </div>
      </motion.div>        
    </Wrapper>
  )
}

export default Contact