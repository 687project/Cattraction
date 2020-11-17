import {fromJS} from 'immutable'
import {CHANGE_POST_DATA, CLEAR_POST_DATA} from "../actions/post";

const defaultState = fromJS({
    isLoading: true,
    postTime: '',
    photoList: [],
    description: '',
    user: {},
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_POST_DATA:
            return state.merge({
                isLoading: false,
                postTime: action.post.post_time,
                photoList: action.post.img_urls,
                description: action.post.description,
                user: action.post.user,
            })
        case CLEAR_POST_DATA:
            return state.merge({
                isLoading: true,
                postTime: '',
                photoList: [],
                description: '',
                user: {},
            });
        default:
            return state;
    }
}