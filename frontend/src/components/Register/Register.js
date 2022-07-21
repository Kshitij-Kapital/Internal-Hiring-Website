import React, { useState } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = async (e) => {
        e.preventDefault();

        const { firstname, lastname, email, password, cpassword } = user;

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname, lastname, email, password, cpassword
            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successfull");
            console.log("Registration Successfull");
            // navigate.push('/login');
        }
    }

    return (
        <div method= "POST" className='Register'>
            {console.log(user)}
            <h1>Register</h1>
                <input type="text" name="firstname" value={user.firstname} placeholder='Enter your Firstname' onChange={handleChange}></input>
                <input type="text" name="lastname" value={user.lastname} placeholder='Enter your Lastname' onChange={handleChange}></input>
                <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange}></input>
                <input type="Password" name="password" value={user.password} placeholder='Enter your Password' onChange={handleChange}></input>
                <input type="Password" name="cpassword" value={user.cpassword} placeholder='Re-Enter your Password' onChange={handleChange}></input>
                <div className='Button' onClick={register}>Register</div>
                <div>or</div>
                <div className='Button' onClick={() => navigate('/login') }>Login</div>
        </div>
    )
}

export default Register