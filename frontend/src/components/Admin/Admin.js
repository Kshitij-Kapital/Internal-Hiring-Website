import React from 'react';
import "./Admin.css";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();
    
    return (
        <div className="Admin">
        <h1>Admin Dashboard</h1>
        <div className='Button' onClick={() => navigate('/login') }>Logout</div>
        </div>
    )
}

export default Admin