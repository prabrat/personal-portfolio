import React from 'react'
import '../styles/contact.css'

function contact() {
  return (
    <div className='contact'>
      <h3 className='title'>Contact Me</h3>
      <div className='form'> 
        <form>
          <label>Name</label> 
          <input name='name' placeholder='John Doe' /> 
          <label>Email</label>
          <input name='email' placeholder='example@email.com' /> 
          <label>Message</label>
          <textarea name='message' placeholder='Type your message here' rows='6' /> 
        </form>
      </div> 
      <button type='submit'>Submit</button>
    </div>
  )
}

export default contact
