import axios, { AxiosResponse } from 'axios';
import { IActivity } from '../models/activity';

// Method to fake slow loads for simulating what it would actually be like.
const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

// Setting up base url so that I wouldn't have to type it all the time.
axios.defaults.baseURL = 'http://localhost:5000/api';

// Using axios interceptors to fake delay on axios request.
axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch(err) {
        console.log(err);
        return await Promise.reject(err);
    } 
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody)
}

const Activities = {
    list: () => requests.get<IActivity[]>('/activities')
}

const agent = {
    Activities
}

export default agent;