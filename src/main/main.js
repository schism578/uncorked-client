import React from 'react';
import config from '../config';
import Context from '../context';
import { withRouter } from 'react-router-dom';
import TokenService from '../services/token-service';
import StarRatings from 'react-star-ratings';
//import AuthApiService from '../services/auth-api-service';
import './main.css';

class Main extends React.Component {
    static contextType = Context;
    user_id = this.context.userInfo.user_id;

    state = {
        newWine: {
            user_id: this.user_id,
            winemaker: {
                touched: false,
                value: '',
            },
            wine_type: {
                touched: false,
                value: '',
            },
            wine_name: {
                touched: false,
                value: '',
            },
            varietal: {
                touched: false,
                value: '',
            },
            vintage: {
                touched: false,
                value: '',
            },
            region: {
                touched: false,
                value: '',
            },
            tasting_notes: {
                touched: false,
                value: '',
            },
            rating: '',
            img_url: {
                touched: false,
                value: '',
            },
            error: null,
        }
    }

    initiateWineData = (input, value) => {
        this.setState({
            newWine: {
                ...this.state.newWine,
                [input]: {
                    touched: true,
                    value: value,
                },
            },
        })
    }

    changeRating = (newRating, name) => {
        this.setState({
            rating: newRating
        });
    }

    postWine(newWine) {
        console.log(this.user_id)
        return fetch(`${config.USER_API_ENDPOINT}/wine/${this.user_id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWine),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                console.log(res)
                this.context.handleAddWine(res)
            })
    }

    handleWineFormSubmit = e => {
        e.preventDefault()
        const newWine = {
            user_id: this.user_id,
            winemaker: this.state.newWine.winemaker.value,
            wine_type: this.state.newWine.wine_type.value,
            wine_name: this.state.newWine.wine_name.value,
            varietal: this.state.newWine.varietal.value,
            vintage: parseInt(this.state.newWine.vintage.value),
            region: this.state.newWine.region.value,
            tasting_notes: this.state.newWine.tasting_notes.value,
            rating: parseInt(this.state.newWine.rating.value),
            img_url: this.state.newWine.img_url.value,
        }
        this.postWine(newWine)
            .then(() => {
                /*this.context.handleAddWine(res)
                this.context.setWines(res)*/
                this.props.history.push('/history')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const username = this.context.userInfo.username;
        return (
            <div>
                <form className='wine-form' onSubmit={this.handleWineFormSubmit}>
                    <fieldset>
                        <legend>add a new wine, {username}</legend>
                        {this.state.error &&
                            <h3 className='error'> {this.state.error.message} </h3>}
                        <ul>
                            <li>
                                <input placeholder='winemaker' type='text' className='winemaker' id='winemaker' onChange={(e) => this.initiateWineData('winemaker', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='wine type' type='text' className='wine_type' id='wine_type' onChange={(e) => this.initiateWineData('wine_type', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='wine name' type='text' className='wine_name' id='wine_name' onChange={(e) => this.initiateWineData('wine_name', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='grape varietals' type='text' className='varietal' id='varietal' onChange={(e) => this.initiateWineData('varietal', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='region' type='text' className='region' id='region' onChange={(e) => this.initiateWineData('region', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='vintage' type='text' className='vintage' id='vintage' onChange={(e) => this.initiateWineData('vintage', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='tasting notes' type='text' className='tasting_notes' id='tasting_notes' onChange={(e) => this.initiateWineData('tasting_notes', e.target.value)} />
                            </li>
                            <li>
                                <StarRatings
                                    rating={this.state.rating}
                                    starHoverColor='red'
                                    starRatedColor='red'
                                    changeRating={this.changeRating}
                                    numberOfStars={5}
                                    starDimension='30px'
                                    name='rating'
                                />
                            </li>
                            <li>
                                <input placeholder='photo url' type='text' className='image_url' id='image_url' onChange={(e) => this.initiateWineData('img_url', e.target.value)} />
                            </li>
                        </ul>
                    </fieldset>
                    <button type='submit' className='add-button'>submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Main);