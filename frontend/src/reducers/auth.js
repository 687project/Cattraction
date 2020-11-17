import {fromJS} from 'immutable'
import {AUTHENTICATE_USER, LOGIN_EMAIL_ERROR, LOGIN_PASSWORD_ERROR, LOGOUT} from "../actions/auth";

const defaultState = fromJS({
    loginStatus: false,
    emailError: '',
    passwordError: '',
    currentUser: {},
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return state.merge({
                loginStatus: true,
                emailError: '',
                passwordError: '',
                currentUser: action.currentUser,
            });
        case LOGIN_EMAIL_ERROR:
            return state.set('emailError', action.error)
        case LOGIN_PASSWORD_ERROR:
            return state.merge({
                emailError: '',
                passwordError: action.error,
            });
        case LOGOUT:
            return state.merge({
                loginStatus: false,
                currentUser: {},
            });
        default:
            return state;
    }
}
