import React from 'react';
import Context from '../context';
import { withRouter } from 'react-router-dom';
//import TokenService from '../services/token-service';
//import AuthApiService from '../services/auth-api-service';
import './main.css';
import WineApiService from '../services/wine-api-service';


class Main extends React.Component {
    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {
            wine: {
                winemaker: '',
                wine_type: '',
                wine_name: '',
                varietal: '',
                vintage: '',
                region: '',
                tasting_notes: '',
                rating: '',
                img_url: '',
            }
        }
    }

    updateWine = (e) => {
        this.setState({
            wine: {
                value: e.target.value,
            },
        })
    }

    /*winePost = (user_id) => {
        return fetch(`${config.WINE_API_ENDPOINT}/log/${user_id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({ wine: this.state.wine })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                this.props.history.push('/history')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }*/

    handleWineFormSubmit = (e, user_id) => {
        e.preventDefault()
        WineApiService.postWine(user_id)
        this.props.history.push('/history')
    }

    render() {
        return (
            <div>
                <form className='wine-form' onSubmit={this.handleWineFormSubmit}>
                    <fieldset>
                        <legend>add a new wine</legend>
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
                                <input placeholder='region' type='text' className='region' id='region' />
                            </li>
                            <li>
                                <input placeholder='vintage' type='text' className='vintage' id='vintage' />
                            </li>
                            <li>
                                <input placeholder='tasting notes' type='text' className='tasting-notes' id='tasting-notes' />
                            </li>
                            <li>
                                <input placeholder='rating:   * * * * *' type='text' className='rating' id='rating' />
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