import axios from 'axios';

/*
 * action types
 */

export const OPEN_LOGIN_DIALOG = 'Auth/open_login_dialog';
export const CLOSE_LOGIN_DIALOG = 'Auth/close_login_dialog';
export const CHANGE_LOGIN = 'Auth/change_login';
export const LOGOUT = 'Auth/logout';

/*
 * action creators
 */

export const openLogin = () => ({
    type: OPEN_LOGIN_DIALOG,
    open: true,
});

export const closeLogin = () => ({
    type: CLOSE_LOGIN_DIALOG,
    open: false,
});

export const logout = () => ({
    type: LOGOUT,
    login: false,
});

const changeLogin = (user) => ({
    type: CHANGE_LOGIN,
    user,
});

export const login = (email, password) => {
    return (dispatch) => {
        axios.get(`/api/auth/login.json`).then((res) => {
            const result = res.data;
            dispatch(changeLogin(result));
        });
    }
}