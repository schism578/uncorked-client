import React from 'react';
import config from '../config';
import Context from '../context';
import { withRouter } from 'react-router-dom';
import TokenService from '../services/token-service';
//import AuthApiService from '../services/auth-api-service';
import './main.css';

class Main extends React.Component {
    static contextType = Context;
    userId = this.context.userInfo.user_id;

        state = {
            newWine: {
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
                rating: {
                    touched: false,
                    value: '',
                },
                img_url: {
                    touched: false,
                    value: '',
                },
                error: null
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

    postWine(userId) {
        return fetch(`${config.USER_API_ENDPOINT}/wine/${userId}`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({ newWine: this.state.newWine }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }

    handleWineFormSubmit = (e) => {
        e.preventDefault()
        const newWine = {
            winemaker: this.state.newWine.winemaker.value,
            wine_type: this.state.newWine.wine_type.value,
            wine_name: this.state.newWine.wine_name.value,
            varietal: this.state.newWine.varietal.value,
            vintage: this.state.newWine.vintage.value,
            region: this.state.newWine.region.value,
            tasting_notes: this.state.newWine.tasting_notes.value,
            rating: this.state.newWine.rating.value,
            img_url: this.state.newWine.img_url.value,
        }
        this.postWine(newWine)
        .then(() => {
            this.context.handleAddWine()
            this.props.history.push('/history')
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        return (
            <div>
                <form className='wine-form' onSubmit={this.handleWineFormSubmit}>
                    <fieldset>
                        <legend>add a new wine</legend>
                        {this.state.error &&
                            <h3 className='error'> {this.state.error.message} </h3>}
                        <ul>
                            <li>
                                <input placeholder='winemaker' type='text' className='winemaker' id='winemaker' onChange={(e) => this.initiateWineData('winemaker', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='wine type' type='text' className='wine-type' id='wine-type' onChange={(e) => this.initiateWineData('wine-type', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='wine name' type='text' className='wine-name' id='wine-name' onChange={(e) => this.initiateWineData('wine-name', e.target.value)} />
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
                                <input placeholder='tasting notes' type='text' className='tasting-notes' id='tasting-notes' onChange={(e) => this.initiateWineData('tasting-notes', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='rating:   * * * * *' type='text' className='rating' id='rating' onChange={(e) => this.initiateWineData('rating', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='photo url' type='text' className='image-url' id='image-url' onChange={(e) => this.initiateWineData('img-url', e.target.value)} />
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