import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
    
    const [user, setUser ] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    
    return (
        <div className='Login'>
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter your Email'></input>
        <input type="Password" name="password" value={user.password} onChange={handleChange} placeholder='Enter your Password'></input>
        <div className='Button'>Login</div>
        <div>or</div>
        <div className='Button'>Register</div>
        </div>
    )
}

export default Login