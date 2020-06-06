import { API_URL, TOKEN } from '../utils/constant'
import jwtDecode from "jwt-decode";

export const loginApi = (user) => {
    const url = `${API_URL}/login`

    const parans = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    }

    return fetch(url, parans).then(res => {
        return res.json()
    }).then(results => {
        return results
    }).catch(err => {
        return err
    })
}

export const setTokenApi = (token) => {
    localStorage.setItem(TOKEN, token)
}

export const getTokenApi = () => {
    return localStorage.getItem(TOKEN)
}

export const logOutApi = () => {
    localStorage.removeItem(TOKEN)
}

export const isUserLogedApi = () => {
    const token = getTokenApi()

    if (!token) {
        return null;
        logOutApi()
    }

    if (isExpiredToken(token)) {
        logOutApi()
    }

    return jwtDecode(token)
}

export const isExpiredToken = (token) => {
    const {exp} = jwtDecode(token)
    const expire = exp * 1000
    const timeout = expire - Date.now()

    if (timeout < 0) {
        return true
    }

    return false
}