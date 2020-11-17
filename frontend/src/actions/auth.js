/*
 * action types
 */

export const AUTHENTICATE_USER = 'Auth/authenticate_user';
export const LOGIN_EMAIL_ERROR = 'Auth/login_email_error';
export const LOGIN_PASSWORD_ERROR = 'Auth/login_password_error';
export const LOGOUT = 'Auth/logout';

/*
 * action creators
 */

export const logout = () => ({
    type: LOGOUT
});

export const authenticateUser = (currentUser) => ({
    type: AUTHENTICATE_USER,
    currentUser,
});

export const emailError = (error) => ({
    type: LOGIN_EMAIL_ERROR,
    error,
});

export const passwordError = (error) => ({
    type: LOGIN_PASSWORD_ERROR,
    error,
});