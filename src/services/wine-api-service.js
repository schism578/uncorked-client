import TokenService from '../services/token-service';
import config from '../config';

const WineApiService = {
    getWine(userId) {
        return fetch(`${config.WINE_API_ENDPOINT}/wine/${userId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postWine(userId) {
        return fetch(`${config.USER_API_ENDPOINT}/wine/${userId}`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                user_id: userId,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default WineApiService