import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Login Successfull");
            console.log("login Successfull");
        }
        // navigate.push('/register');
    }

    return (
        <div method="POST" className="Login">
            <h1>Login</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" name="email" value={user.email} onChange={handleChange}></input>
                    <span></span>
                    <label>Email</label>
                </div>
                <div class="txt_field">
                    <input type="Password" name="password" value={user.password} onChange={handleChange}></input>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">Forgot Password?</div>
                <div className="Button" onClick={login}>Login</div>
                <div>or</div>
                <div className='Button' onClick={() => navigate('/register')}>Register</div>
            </form>
        </div>
    )
}

export default Login