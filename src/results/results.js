import React from 'react';
import { Link } from 'react-router-dom';
//import Context from '../context';
//import config from '../config';
//import { withRouter } from 'react-router-dom';
//import TokenService from '../services/token-service';
//import AuthApiService from '../services/auth-api-service';
import './results.css';

export default function Results() {
    return (
        <div>
            <h2>results</h2>
            <ul>
                <li>winemaker:  Sean Thackeray</li>
                <li>wine name:  Orion</li>
                <li>varietal(s):  Syrah</li>
                <li>vintage:  2016</li>
                <li>wine type:  red</li>
                <li id='tasting-notes'>tasting notes:  smoke, olives, herbal, oaky, tannic</li>
                <li>rating: * * * * *</li>
            </ul>
            <ul>
                <li>winemaker:  Andre Clouet</li>
                <li>wine name:  Brut Rose</li>
                <li>varietal(s):  Champagne</li>
                <li>vintage:  NV</li>
                <li>wine type:  sparkling</li>
                <li id='tasting-notes'>tasting notes:  quince, roasted strawberries, lactic, opulent effervescence</li>
                <li>rating: * * * * *</li>
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