import React from 'react';
import { Link } from 'react-router-dom';
//import Context from '../context';
//import config from '../config';
//import { withRouter } from 'react-router-dom';
//import TokenService from '../services/token-service';
//import AuthApiService from '../services/auth-api-service';
import './search.css';

class Search extends React.Component {
    render() {
        return (
            <div>
                <form className='search-form' >
                    <fieldset className='search-field'>
                        <legend>Search</legend>
                        <ul>
                            <li>
                                <input placeholder='Winemaker' type='text' className='winemaker' id='winemaker' />
                            </li>
                            <li>
                                <input placeholder='Wine Name' type='text' className='wine-name' id='wine-name' />
                            </li>
                            <li>
                                <input placeholder='Grape Varietals' type='text' className='varietals' id='varietals' />
                            </li>
                            <li>
                                <input placeholder='Vintage' type='text' className='vintage' id='vintage' />
                            </li>
                            <li>
                                <input placeholder='Rating:   * * * * *' type='text' className='rating' id='rating' />
                            </li>
                        </ul>
                    </fieldset>
                </form>
                <br></br>
                <Link
                    to='/results'
                    type='button'
                    className='search-button'
                >
                    Search</Link>
                <br></br>
                <Link
                    to='/main'
                    type='button'
                    className='create-button'
                >
                    Cancel</Link>
            </div>
        )
    }
}

export default Search;