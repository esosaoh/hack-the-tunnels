import React from 'react';
import './NotFound.style.scss';

const NotFoundPage: React.FC = () => {
    return (
        <div className="container1" id="404">
            <h1 className = "idara">404</h1>
            <h2 className = "idara1">Lost in Cyberspace</h2>
            <p className = "idara2">You’ve entered uncharted territory! This page doesn’t exist in our universe. Let’s get you home.</p>
            <a href="/" className="goback-home-button">Go Back Home</a>
        </div>
    );
};

export default NotFoundPage;