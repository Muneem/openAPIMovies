// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">Movie App</Link> {/* Added className */}
        </nav>
    );
};

export default Navbar;
