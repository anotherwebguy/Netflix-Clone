import React from 'react'
import "../assets/css/SignUpScreen.css"

function SignUpScreen() {
  return (
    <div className='SignUpScreen'>
      <form className='container'>
        <h1>Sign Up</h1>
        <input className='sign_input' type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password' />
        <button type='submit'>Sign In</button>
        <h4><span className='signUp_grey'>New to Netflix?</span> <span className='signUp_link'>Sign Up now.</span></h4>
      </form>
    </div>
  )
}

export default SignUpScreen
