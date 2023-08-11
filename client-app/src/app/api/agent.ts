import axios, { AxiosResponse } from 'axios';

// Setting up base url so that I wouldn't have to type it all the time.
axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}

const Activities = {
    list: () => requests.get('/activities')
}

const agent = {
    Activities
}

export default agent;