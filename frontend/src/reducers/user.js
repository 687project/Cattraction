import {fromJS} from 'immutable'
import {CHANGE_USER} from "../actions/user";

const defaultState = fromJS({
    valid: false,
    userId: 0,
    username: '',
    avatarUrl: '',
    followingCount: 0,
    followedCount: 0,
    signature: '',
    isFollowing: false,
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_USER:
            return state.merge({
                userId: action.userId,
                username: action.username,
                avatarUrl: action.avatarUrl,
                followingCount: action.followingCount,
                followedCount: action.followedCount,
                signature: action.signature,
                isFollowing: action.isFollowing,
            })
        default:
            return state;
    }
}