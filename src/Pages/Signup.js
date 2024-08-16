import React from 'react'
import { Link } from 'react-router-dom'
// import {ToastContainer} from 'react-toastify'


function Signup() {
  return (
    <div>
        <h1>Signup</h1>
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    autoFocus
                    placeholder='Enter your name...'
                    />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    placeholder='Enter your email...'
                    />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Enter your password...'
                    />
            </div>
            <button>Signup</button>
            <span>Already have an Account ?
                <link to= "/login">Login</link>
            </span>
        </form>
    </div>
  )
}

export default Signup;