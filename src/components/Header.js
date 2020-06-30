import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import {Logout} from './Logout';

export const Header = () => {
    return (
        <div>
            <h1><a href="/">NCT Antenatal App</a></h1>
            <Logout />
            <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/course">Your course</Link>
                </li>
            </ul>
            </Router>
        </div>
    )
}
