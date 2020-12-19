import React from 'react';
import { Link } from 'react-router-dom';
//import Context from '../context';
//import config from '../config';
//import { withRouter } from 'react-router-dom';
//import TokenService from '../services/token-service';
//import AuthApiService from '../services/auth-api-service';
import './main.css';


class Main extends React.Component {
    render() {
        return (
            <div>
                <form className='wine-form' >
                    <fieldset>
                        <legend>Add a New Wine</legend>
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
                                <input placeholder='Region' type='text' className='region' id='region' />
                            </li>
                            <li>
                                <input placeholder='Vintage' type='text' className='vintage' id='vintage' />
                            </li>
                            <li>
                                <input placeholder='Tasting Notes' type='text' className='tasting-notes' id='tasting-notes' />
                            </li>
                            <li>
                                <input placeholder='Rating:   * * * * *' type='text' className='rating' id='rating' />
                            </li>
                        </ul>
                    </fieldset>
                    <Link
                                to='/history'
                                type='button'
                                className='add-button'
                            >
                                Submit</Link>
                </form>
            </div>
        )
    }
}

export default Main;