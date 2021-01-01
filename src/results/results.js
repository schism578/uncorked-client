import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Context from '../context';
//import config from '../config';
//import TokenService from '../services/token-service';
//import AuthApiService from '../services/auth-api-service';
import './results.css';

class Results extends React.Component {
    static contextType = Context;

    wineImage = (wine) => {
        if (wine.img_url) {
            return <img src={wine.img_url} alt='glass of wine' width='130' height='160' />
        } if (wine.wine_type === 'red') {
            return <img src={'/images/red.jpg'} alt='glass of red wine' />
        } if (wine.wine_type === 'white') {
            return <img src={'/images/white.jpg'} alt='glass of white wine' />
        } if (wine.wine_type === 'rose') {
            return <img src={'/images/rose.jpg'} alt='glass of rose wine' />
        } if (wine.wine_type === 'sparkling') {
            return <img src={'/images/sparkling.jpg'} alt='glass of sparkling wine' />
        }
    }

    searchWines = () => this.context.wines.map(wine => (
        <div key={wine.wine_id} className='search-wine-item'>
            {this.wineImage(wine)}
            <li>wine type:  {wine.wine_type}</li>
            <li>winemaker:  {wine.winemaker}</li>
            <li>wine name:  {wine.wine_name}</li>
            <li>varietal(s):  {wine.varietal}</li>
            <li>vintage:  {wine.vintage}</li>
            <li>region:  {wine.region}</li>
            <li>tasting notes:  {wine.tasting_notes}</li>
            <li>rating: {wine.rating}</li>
        </div>
    ))

    render() {
        return (
            <div>
                <h2>results</h2>
                <ul className='search-wine-list'>
                    {this.searchWines()}
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

export default withRouter(Results);