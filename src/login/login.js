import React from 'react';
import { Link } from 'react-router-dom';
//import Context from '../context';
//import config from '../config';
//import { withRouter } from 'react-router-dom';
//import TokenService from '../services/token-service';
//import AuthApiService from '../services/auth-api-service';
import './login.css';

class Login extends React.Component {
    render() {
        return (
            <div>
                <form className='create-form'>
                    <fieldset className='create-field'>
                        <legend>Create Profile:</legend>
                        <ul className='profile-list'>
                            <li>
                                <input
                                    type='text'
                                    className='create-creds'
                                    id='create-username'
                                    placeholder='Username'
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    type='password'
                                    className='create-creds'
                                    id='create-password'
                                    placeholder='Password'
                                    required
                                />
                            </li>
                        </ul>
                        <Link
                                to='/main'
                                type='button'
                                className='create-button'
                            >
                                Sign Up</Link>
                    </fieldset>
                </form>
                <form className='login-form'>
                    <fieldset className='login-field'>
                        <legend>Log In:</legend>
                        <ul className='login-list'>
                            <li>
                                <input
                                    type='text'
                                    className='login-creds'
                                    id='login-username'
                                    placeholder='Email'
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    type='password'
                                    className='login-creds'
                                    id='login-password'
                                    placeholder='Password'
                                    required
                                />
                            </li>
                        </ul>
                        <Link
                                to='/main'
                                type='button'
                                className='login-button'
                            >
                                Login</Link>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Login;