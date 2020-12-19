import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <div>
            <ul className='nav-links'>
                <li><Link to='/' type='button' className='nav-link'>Home</Link></li>
                <li><Link to='/search' type='button' className='nav-link'>Search</Link></li>
                <li><Link to='/history' type='button' className='nav-link'>History</Link></li>
            </ul>
        </div>
    )
}
