import React from 'react';
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    
    return (
        <div className="Dashboard">
        <h1>Admin Dashboard</h1>
        <div className='Button' onClick={() => navigate('/login') }>Logout</div>
        </div>
    )
}

export default Dashboard