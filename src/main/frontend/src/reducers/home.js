import {fromJS} from 'immutable'
import {CHANGE_HOME_CONTENT_DATA} from "../actions/home";

const defaultState = fromJS({
    postList: [],
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_HOME_CONTENT_DATA:
            return state.merge({
                postList: action.postList,
            })
        default:
            return state;
    }
}