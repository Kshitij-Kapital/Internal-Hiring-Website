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
        <div method="POST" className="Register">
            <h1>Register</h1>
            <form method="post">

                <div className="txt_field">
                    <input type="text" name="firstname" value={user.firstname} onChange={handleChange}></input>
                    <span></span>
                    <label>Firstname</label>
                </div>
                <div className="txt_field">
                    <input type="text" name="lastname" value={user.lastname} onChange={handleChange}></input>
                    <span></span>
                    <label>Lastname</label>
                </div>
                <div className="txt_field">
                    <input type="text" name="email" value={user.email} onChange={handleChange}></input>
                    <span></span>
                    <label>Email</label>
                </div>
                <div className="txt_field">
                    <input type="Password" name="password" value={user.password} onChange={handleChange}></input>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="txt_field">
                    <input type="Password" name="cpassword" value={user.cpassword} onChange={handleChange}></input>
                    <span></span>
                    <label>Re-Enter your Password</label>
                </div>

                <div className="Button" onClick={register}>Register</div>
                <div>or</div>
                <div className="Button" onClick={() => navigate('/login')}>Login</div>
            </form>
        </div>
    )
}

export default Register