import { Request } from "../Constant/Api";

export const userLogin = (params) => {
    const api_url = 'users/login';  
    return Request(api_url,params);
};