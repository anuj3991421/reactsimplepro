import axios from 'axios';
import { SERVER_URL, APP_VERSION } from "./Constant";

import { getToken } from "../lib/Helper";

// const instance = axios.create({
//     baseURL: SERVER_URL,
// });

export const Request = (api_url,params) => {
    return axios.post(SERVER_URL+'/'+api_url,params);
}

export const getRequestWithToken = (api_url,params) => {
    let header = {headers: {'Authorization': getToken()}};
    return axios.get(SERVER_URL+api_url, header);
}

export const putRequest = (api_url,params) => {
    let header = {headers: {'Authorization': getToken()}};
    return axios.put(SERVER_URL+api_url,params,header);
}

export const postRequest = (api_url,params) => {
    
    let formdata = new FormData();
    Object.keys(params).forEach(e => formdata.append(e,params[e] || ''));

    let header = {headers: {'Authorization': getToken()}};
    return axios.post(SERVER_URL+api_url,params,header);
}

export const deleteRequest = (api_url,params) => {
    let header = {headers: {'Authorization': getToken()}};
    return axios.delete(SERVER_URL+api_url,params,header);
}
