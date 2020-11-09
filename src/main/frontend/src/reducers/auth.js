import {fromJS} from 'immutable'
import {
    CHANGE_LOGIN,
    CLOSE_LOGIN_DIALOG,
    LOGOUT,
    OPEN_LOGIN_DIALOG
} from "../actions/auth";

const defaultState = fromJS({
    login: false,
    open: false,
    user: {},
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_LOGIN_DIALOG:
            return state.set('open', action.open);
        case CLOSE_LOGIN_DIALOG:
            return state.set('open', action.open);
        case CHANGE_LOGIN:
            return state.merge({
                login: true,
                open: false,
                user: action.user,
            });
        case LOGOUT:
            return state.set('login', action.login);
        default:
            return state;
    }
}
