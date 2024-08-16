import React, { useState } from 'react'

export default function AuthForm () {

const [isLogin, setIsLogin]  = useState(true)
return(
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)} >Singup</button>
        </div>

      {isLogin ? <>
      <div className='form'>
        <h2>Login Form</h2>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        {/* <a href='#'>Forgot Password</a> */}
        <button>Login</button>
        {/* <p>Not a Member <a href='#' onClick={() => setIsLogin(false)}>Singup here</a></p> */}
      </div>
      </> : 
      <>
      <div className='form'>
       <h2>Signup Form</h2>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <input type='password' placeholder='Confirm password'/>
        <button>Signup</button>
        </div>
      </>}

      </div>
    </div>
  )
}
