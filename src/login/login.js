import React from 'react';
import WineApiService from '../services/wine-api-service';
import Context from '../context';
import { withRouter } from 'react-router-dom';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import './login.css';

class Login extends React.Component {
    static contextType = Context;
    user_id = this.context.userInfo.user_id;

    state = {
        newUser: {
            user_id: {
                value: ''
            },
            username: {
                touched: false,
                value: '',
            },
            password: {
                touched: false,
                value: '',
            },
            error: null
        },
        loginUser: {
            username: {
                touched: false,
                value: '',
            },
            password: {
                touched: false,
                value: '',
            },
            error: null
        }
    }

    initiateNewUserData = (input, value) => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                [input]: {
                    touched: true,
                    value: value,
                },
            },
        })
    }

    initiateUserLogin = (input, value) => {
        this.setState({
            loginUser: {
                ...this.state.loginUser,
                [input]: {
                    touched: true,
                    value: value,
                },
            },
        })
    }

    /*componentDidUpdate() {
        if (`${this.state.user_id}` !== `${this.context.userInfo.user_id}`) {
            this.setState({
                user_id: this.context.userInfo.user_id
            })
        }
    }*/

    handleCreateFormSubmit = e => {
        e.preventDefault()
        const newUser = {
            user_id: this.state.newUser.user_id,
            username: this.state.newUser.username.value,
            password: this.state.newUser.password.value,
        }
        AuthApiService.postUser(newUser)
            .then(res => {
                console.log(res)
                TokenService.saveAuthToken(res.authToken)
                this.context.setUserInfo(res)
                WineApiService.getWine(res.user.user_id)
            .then(res => {
                console.log(res)
                this.context.setWines(res)
                this.props.history.push('/main')
            })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    handleLoginFormSubmit = e => {
        e.preventDefault()
        AuthApiService.postLogin({
            username: this.state.loginUser.username.value,
            password: this.state.loginUser.password.value,
        })
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                this.context.setUserInfo(res.user)
                WineApiService.getWine(res.user.user_id)
            .then((res) => {
                console.log(res)
                this.context.setWines(res)
                this.props.history.push('/main')
            })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        return (
            <div>
                <form className='create-form' onSubmit={this.handleCreateFormSubmit}>
                    <fieldset className='create-field'>
                        <legend>create profile:</legend>
                        {this.state.error &&
                            <h3 className='error'> {this.state.error} </h3>}
                        <ul className='profile-list'>
                            <li>
                                <input
                                    type='text'
                                    className='create-creds'
                                    id='username'
                                    placeholder='username'
                                    onChange={(e) => this.initiateNewUserData('username', e.target.value)}
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    type='password'
                                    className='create-creds'
                                    id='password'
                                    placeholder='password'
                                    onChange={(e) => this.initiateNewUserData('password', e.target.value)}
                                    required
                                />
                            </li>
                        </ul>
                        <button type='submit' className='create-button'>sign up</button>
                    </fieldset>
                </form>
                <form className='login-form' onSubmit={this.handleLoginFormSubmit}>
                    <fieldset className='login-field'>
                        <legend>log in:</legend>
                        {this.state.error &&
                            <h3 className='error'> {this.state.error} </h3>}
                        <ul className='login-list'>
                            <li>
                                <input
                                    type='text'
                                    className='login-creds'
                                    id='username'
                                    placeholder='username'
                                    onChange={(e) => this.initiateUserLogin('username', e.target.value)}
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    type='password'
                                    className='login-creds'
                                    id='password'
                                    placeholder='password'
                                    onChange={(e) => this.initiateUserLogin('password', e.target.value)}
                                    required
                                />
                            </li>
                        </ul>
                        <button type='submit' className='login-button'>login</button>

                    </fieldset>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);