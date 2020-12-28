import React from 'react';
import Context from '../context';
import config from '../config';
import { withRouter } from 'react-router-dom';
import TokenService from '../services/token-service';
import './search.css';

class Search extends React.Component {
    static contextType = Context;

    state = {
        searchBody: {
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
                value: ''
            },
            error: null,
        }
    }

    initiateSearchData = (input, value) => {
        this.setState({
            searchBody: {
                ...this.state.searchBody,
                [input]: {
                    touched: true,
                    value: value,
                },
            },
        })
    }

    searchWine(searchBody) {
        return fetch(`${config.USER_API_ENDPOINT}/wine?${searchBody}`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(searchBody)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                console.log(res)
                this.handleSearchWine(res)
            })
    }

    handleSubmit = e => {
        e.preventDefault();
        const searchBody = {
            winemaker: this.state.searchBody.winemaker.value,
            wine_type: this.state.searchBody.wine_type.value,
            wine_name: this.state.searchBody.wine_name.value,
            varietal: this.state.searchBody.varietal.value,
            vintage: parseInt(this.state.searchBody.vintage.value),
            region: this.state.searchBody.region.value,
            tasting_notes: this.state.searchBody.tasting_notes.value,
            rating: parseInt(this.state.searchBody.rating.value),
        }
        this.searchWine(searchBody)
            .then(() => {
                this.props.history.push('/results')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }



    render() {
        return (
            <div className='search'>
                <form className='search-form' onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend className='search-bar'>search</legend>
                        {this.state.error &&
                            <h3 className='error'> {this.state.error.message} </h3>}
                        <ul>
                            <li>
                                <input placeholder='wine type (sparkling, white, rose, or red)' type='text' className='wine_type_search' id='wine_type' onChange={(e) => this.initiateSearchData('wine_type', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='winemaker' type='text' className='winemaker' id='winemaker' onChange={(e) => this.initiateSearchData('winemaker', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='wine name' type='text' className='wine_name' id='wine_name' onChange={(e) => this.initiateSearchData('wine_name', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='grape varietals' type='text' className='varietal' id='varietal' onChange={(e) => this.initiateSearchData('varietal', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='region' type='text' className='region' id='region' onChange={(e) => this.initiateSearchData('region', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='vintage' type='text' className='vintage' id='vintage' onChange={(e) => this.initiateSearchData('vintage', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='tasting notes' type='text' className='tasting_notes' id='tasting_notes' onChange={(e) => this.initiateSearchData('tasting_notes', e.target.value)} />
                            </li>
                            <li>
                                <input placeholder='rating (1-5)' type='number' className='rating' id='rating' onChange={(e) => this.initiateSearchData('rating', e.target.value)} />
                            </li>
                        </ul>
                    </fieldset>
                </form>
                <br></br>
                <button type='submit' className='search-button'>search</button>
                <br></br>
                <button type='submit' className='cancel-button'>cancel</button>
            </div>
        )
    }
}

export default withRouter(Search);