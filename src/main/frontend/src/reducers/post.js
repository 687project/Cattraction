import {fromJS} from 'immutable'
import {CHANGE_POST_DATA, CLEAR_POST_DATA} from "../actions/post";

const defaultState = fromJS({
    isLoading: true,
    postTime: '',
    photoList: [],
    description: '',
    userId: 0,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_POST_DATA:
            return state.merge({
                isLoading: false,
                postTime: action.post.post_time,
                photoList: action.post.img_urls,
                description: action.post.description,
                userId: action.post.user_id,
            })
        case CLEAR_POST_DATA:
            return state.merge({
                isLoading: true,
                postTime: '',
                photoList: [],
                description: '',
                userId: 0,
            });
        default:
            return state;
    }
}