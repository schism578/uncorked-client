import TokenService from '../services/token-service';
import config from '../config';

const WineApiService = {
    getWine(userId) {
        return fetch(`${config.USER_API_ENDPOINT}/wine/${userId}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postWine(userId, newWine) {
        console.log(this.user_id)
        return fetch(`${config.USER_API_ENDPOINT}/wine/${userId}`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({ newWine }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                this.context.handleAddWine(res)
            })
    }
}

export default WineApiService