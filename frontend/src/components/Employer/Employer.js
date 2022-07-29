import React from 'react';
import "./Employer.css";
import { useNavigate } from 'react-router-dom';

const Employer = () => {
    const navigate = useNavigate();
    
    return (
        <div className="Employer">
        <h1>Employer Dashboard</h1>
        <div className='Button' onClick={() => navigate('/login') }>Logout</div>
        </div>
    )
}

export default Employer