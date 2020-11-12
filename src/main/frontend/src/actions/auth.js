/*
 * action types
 */

export const AUTHENTICATE_USER = 'Auth/login_fail';
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
