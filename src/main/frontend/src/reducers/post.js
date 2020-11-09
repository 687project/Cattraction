import {fromJS} from 'immutable'
import {CHANGE_POST_DATA, CHANGE_POST_DATA_FAIL} from "../actions/post";

const defaultState = fromJS({
    valid: false,
    postTime: '',
    photoList: [],
    description: '',
    userId: 0,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_POST_DATA:
            return state.merge({
                valid: true,
                postTime: action.post.post_time,
                photoList: action.post.img_urls,
                description: action.post.description,
                userId: action.post.user_id,
            })
        case CHANGE_POST_DATA_FAIL:
            return state.set('valid', false);
        default:
            return state;
    }
}