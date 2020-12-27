import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import './nav.css';

export default class Nav extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        localStorage.clear()
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link
                    onClick={this.handleLogoutClick}
                    to='/login'
                    className='logout-link'
                >
                    logout
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <ul className='nav-links'>
                    <li><Link to={TokenService.hasAuthToken() ? '/main' : '/'} 
                            type='button' className='nav-link'>home</Link>
                    </li>
                    <li><Link to='/search' type='button' className='nav-link'>search</Link></li>
                    <li><Link to='/history' type='button' className='nav-link'>history</Link></li>
                </ul>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : ''}
            </div>
        )
    }
}
