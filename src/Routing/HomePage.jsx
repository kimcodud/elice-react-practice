import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage({ userID }) {
    return (
        <div className="homepage">
            <div className="homepage-header">Home Page</div>
            <div className="homepage-content">
                Hello<span>{userID}</span>
            </div>
            <div className="homepage-footer">
                <Link to="/userlist">User List</Link>
            </div>
        </div>
    );
}
