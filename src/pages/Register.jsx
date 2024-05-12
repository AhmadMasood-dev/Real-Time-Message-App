import React from 'react'

const Register = () => {
  return (
    <div>
       <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form >
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="email " placeholder='email' />
          <input style={{display:'none'}} type="file" id='file' />
          <label htmlFor='file'>
            sdsd
          </label>
          <button>Sign in</button>
       
        </form>
     <p>You do have account? Login</p>
      </div>
    </div>
    
    </div>
  )
}

export default Register
