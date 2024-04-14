import React from 'react'
import gLogo from '../assets/google-icon.svg'

const SignUp = () => {
  return (
    <>
     <div className="signupCard">
      <div className="top">
        <p>Login or Sign Up</p>
        <hr></hr> 
      </div>
      <div className="middle">
        <p>Welcome To GreenTrace</p>
        <input type='email' placeholder='Email'></input>
        <button type='submit'>Continue</button>
        <hr></hr>
      </div>
      <div className="bottom">
          <div className="g-logo">
            <img src={gLogo}></img>
          </div>
          <p>Continue With Google</p>
      </div>
      <div className="last">
        <p>Don't have an account? Sign up</p>
      </div>
     </div>
    </>
  )
}

export default SignUp
