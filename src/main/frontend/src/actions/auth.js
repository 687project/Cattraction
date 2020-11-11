import axios from 'axios';

/*
 * action types
 */

export const OPEN_LOGIN_DIALOG = 'Auth/open_login_dialog';
export const CLOSE_LOGIN_DIALOG = 'Auth/close_login_dialog';
export const CHANGE_LOGIN = 'Auth/change_login';
export const CHANGE_EMAIL = 'Auth/change_email';
export const CHANGE_PASSWORD = 'Auth/change_password';
export const LOGIN_FAIL = 'Auth/login_fail';
export const LOGOUT = 'Auth/logout';

/*
 * action creators
 */

export const openLogin = () => ({
    type: OPEN_LOGIN_DIALOG,
    isLoginDialogVisible: true,
});

export const closeLogin = () => ({
    type: CLOSE_LOGIN_DIALOG,
    isLoginDialogVisible: false,
});

export const logout = () => ({
    type: LOGOUT,
    isLogin: false,
});

const changeLogin = (currentUser) => ({
    type: CHANGE_LOGIN,
    currentUser,
});

const loginFail = (loginError) => ({
    type: LOGIN_FAIL,
    loginError,
});

export const changeEmail = (email) => ({
    type: CHANGE_EMAIL,
    email,
});

export const changePassword = (password) => ({
    type: CHANGE_PASSWORD,
    password,
});

export const login = (email, password) => {
    return (dispatch) => {
        axios.get(`/api/auth/login.json`)
            .then((res) => {
                const result = res.data;
                console.log(email, password);
                if (email === "test@test" && password === "123456") {
                    dispatch(changeLogin(result));
                } else {
                    dispatch(loginFail("username or password incorrect"));
                }
            });
    }
}