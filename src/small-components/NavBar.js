import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
// Stylesheets
import './NavBar.css';


function NavBar() {
    return <div className="custom-nav-bar" id="top">
        <nav>
            <Link to="/">
                <span>  
                    <h2><FontAwesomeIcon className="mx-3" icon={faHome} />ewinata</h2>
                </span>
            </Link>
            <div className="float-right">
                <Link to="/about">
                    <span>
                        <h2>About</h2>
                    </span>
                </Link>
                <Link to="/resume">
                    <span>
                        <h2>Resume</h2>
                    </span>
                </Link>
                <Link to="/contact">
                    <span>
                        <h2>Contact</h2>
                    </span>
                </Link>
            </div>
        </nav>
    </div>;
}

export default NavBar;