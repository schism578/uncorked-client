import React from 'react';
import { Link } from 'react-router-dom';
//import Context from '../context';
//import config from '../config';
//import { withRouter } from 'react-router-dom';
//import TokenService from '../services/token-service';
//import AuthApiService from '../services/auth-api-service';
import './history.css';

export default function UserHistory() {
    return (
        <div>
            <h2>History</h2>
            <ul>
                <li>Winemaker:  Sean Thackeray</li>
                <li>Wine Name:  Orion</li>
                <li>Varietal(s):  Syrah</li>
                <li>Vintage:  2016</li>
                <li id='tasting-notes'>Tasting Notes:  smoke, olives, herbal, oaky, tannic</li>
                <li>Rating: * * * * *</li>
            </ul>
            <ul>
                <li>Winemaker:  Andre Clouet</li>
                <li>Wine Name:  Brut Rose</li>
                <li>Varietal(s):  Champagne</li>
                <li>Vintage:  NV</li>
                <li id='tasting-notes'>Tasting Notes:  quince, roasted strawberries, lactic, opulent effervescence</li>
                <li>Rating: * * * * *</li>
            </ul>
            <Link
                                to='/main'
                                type='button'
                                className='return-button'
                            >
                                Go Back</Link>
        </div>
    )
}