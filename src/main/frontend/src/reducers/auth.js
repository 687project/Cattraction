import {fromJS} from 'immutable'
import {
    CHANGE_EMAIL,
    CHANGE_LOGIN, CHANGE_PASSWORD,
    CLOSE_LOGIN_DIALOG, LOGIN_FAIL,
    LOGOUT,
    OPEN_LOGIN_DIALOG
} from "../actions/auth";

const defaultState = fromJS({
    isLogin: false,
    isLoginDialogVisible: false,
    loginError: "",
    currentUser: {},
    isLoading: false,
    email: "",
    password: "",
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_LOGIN_DIALOG:
            return state.merge({
                isLoginDialogVisible: true,
                loginError: "",
            });
        case CLOSE_LOGIN_DIALOG:
            return state.merge({
                isLoginDialogVisible: false,
                loginError: "",
            });
        case CHANGE_LOGIN:
            return state.merge({
                isLogin: true,
                isLoginDialogVisible: false,
                currentUser: action.currentUser,
            });
        case LOGIN_FAIL:
            return state.merge({
                loginError: action.loginError,
                password: "",
            });
        case LOGOUT:
            return state.set('isLogin', action.false);
        case CHANGE_EMAIL:
            return state.set('email', action.email);
        case CHANGE_PASSWORD:
            return state.set('password', action.password);
        default:
            return state;
    }
}
