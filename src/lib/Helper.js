export const setToken = (token) => {
    localStorage.setItem('otoparlat_token',token);
}

export const getToken = () => {
    return localStorage.getItem('otoparlat_token');
}

export const removeToken = () => {
    return localStorage.clear();
    // return localStorage.removeItem('otoparlat_token');
}

export const setRememberME = (token) => {
    localStorage.setItem('otoparlat_remember',token);
}

export const getRememberME = () => {
    return localStorage.getItem('otoparlat_remember');
}

export const removeRememberME = () => {
    return localStorage.removeItem('otoparlat_remember');
}

export const setLocalValue = (key, value) => {
    localStorage.setItem(key, value);
}

export const getLocalValue = (key) => {
    return localStorage.getItem(key);
}

export const removeLocalValue = (key) => {
    return localStorage.removeItem(key);
}