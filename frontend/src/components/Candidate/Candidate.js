import React from 'react';
import "./Candidate.css";
import { useNavigate } from 'react-router-dom';

const Candidate = () => {
    const navigate = useNavigate();
    
    return (
        <div className="Candidate">
        <h1>Candidate Dashboard</h1>
        <div className='Button' onClick={() => navigate('/login') }>Logout</div>
        </div>
    )
}

export default Candidate