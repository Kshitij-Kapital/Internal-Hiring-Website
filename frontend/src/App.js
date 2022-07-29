import './App.css'
import React, { useState } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';
import Employer from './components/Employer/Employer';
import Candidate from './components/Candidate/Candidate';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

    const [user, setLoginUser] = useState({})

    return (
        <>
        <Router>
            <Routes>
                <Route path="/">
                {
                    user && user.role==="ADMIN"
                    ? 
                    <> <Route path="/Admin" element={<Admin />} /> </> 
                    : 
                    <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
                }
                </Route>


                <Route path="/Employer" element={<Employer />} />
                <Route path="/Candidate" element={<Candidate />} />
                <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
        </>
    )
}

export default App