import React from 'react';
import { Link } from 'react-router-dom';
import Context from '../context';
//import config from '../config';
import { withRouter } from 'react-router-dom';
//import TokenService from '../services/token-service';
//import AuthApiService from '../services/auth-api-service';
import './search.css';

class Search extends React.Component {
    static contextType = Context;
    state = {
        searchWine: {
            winemaker: '',
            wine_type: '',
            wine_name: '',
            varietal: '',
            vintage: '',
            region: '',
            tasting_notes: '',
            rating: '',
        }
    }

render() {
    return (
        <div>
            <form className='search-form' >
                <fieldset className='search-field'>
                    <legend>search</legend>
                    <ul>
                        <li>
                            <input placeholder='winemaker' type='text' className='winemaker' id='winemaker' />
                        </li>
                        <li>
                            <input placeholder='wine type' type='text' className='wine-type' id='wine-type' />
                        </li>
                        <li>
                            <input placeholder='wine name' type='text' className='wine-name' id='wine-name' />
                        </li>
                        <li>
                            <input placeholder='grape varietals' type='text' className='varietals' id='varietals' />
                        </li>
                        <li>
                            <input placeholder='vintage' type='text' className='vintage' id='vintage' />
                        </li>
                        <li>
                            <input placeholder='region' type='text' className='region' id='region' />
                        </li>
                        <li>
                            <input placeholder='rating:   * * * * *' type='text' className='rating' id='rating' />
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
                search</Link>
            <br></br>
            <Link
                to='/main'
                type='button'
                className='cancel-button'
            >
                cancel</Link>
        </div>
    )
}
}

export default withRouter(Search);