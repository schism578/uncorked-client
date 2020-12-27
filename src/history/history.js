import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Context from '../context';
//import config from '../config';
//import TokenService from '../services/token-service';
//import AuthApiService from '../services/auth-api-service';
import './history.css';

class UserHistory extends React.Component {
    static contextType = Context;

    userWines = () => this.context.wines.map(wine => (
        <div key={wine.wine_id} className='user-wine-item'>
            <li>winemaker:  {wine.winemaker}</li>
            <li>wine type:  {wine.wine_type}</li>
            <li>wine name:  {wine.wine_name}</li>
            <li>varietal(s):  {wine.varietal}</li>
            <li>vintage:  {wine.vintage}</li>
            <li>region:  {wine.region}</li>
            <li>tasting notes:  {wine.tasting_notes}</li>
            <li>rating: {wine.rating}</li>
            <li>image:  {wine.img_url}</li>
        </div>
    ))

    render() {
    return (
        <div>
            <h2>history</h2>
            <ul className='user-wine-list'>
                {this.userWines()}
            </ul>
            <Link
                                to='/main'
                                type='button'
                                className='return-button'
                            >
                                go back</Link>
        </div>
    )
    }
}

export default withRouter(UserHistory);