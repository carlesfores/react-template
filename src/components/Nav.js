import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className="Nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
}

export default Nav;