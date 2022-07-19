import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div className='Login'>
        <h1>Login</h1>
        <input type="text" placeholder='Enter your Email'></input>
        <input type="Password" placeholder='Enter your Password'></input>
        <div className='Button'>Login</div>
        <div>or</div>
        <div className='Button'>Register</div>
        </div>
    )
}

export default Login