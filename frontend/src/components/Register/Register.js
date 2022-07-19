import React from 'react';
import "./Register.css";

const Register = () => {
    return (
        <div className='Register'>
        <h1>Register</h1>
        <input type="text" placeholder='Enter your Firstname'></input>
        <input type="text" placeholder='Enter your Lastname'></input>
        <input type="text" placeholder='Enter your Email'></input>
        <input type="Password" placeholder='Enter your Password'></input>
        <input type="Password" placeholder='Re-Enter your Password'></input>
        <div className='Button'>Register</div>
        <div>or</div>
        <div className='Button'>Login</div>
        </div>
    )
}

export default Register