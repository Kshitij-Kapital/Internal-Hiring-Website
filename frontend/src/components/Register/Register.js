import React, { useState } from 'react';
import "./Register.css";

const Register = () => {

    const [user, setUser ] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className='Register'>
        {console.log(user)}
        <h1>Register</h1>
        <input type="text" name="firstname" value={user.firstname} placeholder='Enter your Firstname' onChange={ handleChange }></input>
        <input type="text" name="lastname" value={user.lastname} placeholder='Enter your Lastname' onChange={ handleChange }></input>
        <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={ handleChange }></input>
        <input type="Password" name="password" value={user.password} placeholder='Enter your Password' onChange={ handleChange }></input>
        <input type="Password" name="cpassword" value={user.cpassword} placeholder='Re-Enter your Password' onChange={ handleChange }></input>
        <div className='Button'>Register</div>
        <div>or</div>
        <div className='Button'>Login</div>
        </div>
    )
}

export default Register