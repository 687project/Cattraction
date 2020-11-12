import {fromJS} from 'immutable'
import {AUTHENTICATE_USER, LOGOUT} from "../actions/auth";

const defaultState = fromJS({
    loginStatus: false,
    currentUser: {},
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return state.merge({
                loginStatus: true,
                currentUser: action.currentUser,
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
