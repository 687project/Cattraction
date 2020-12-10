import axios from 'axios';

/*
 * action types
 */

export const CHANGE_USER = 'User/change_user';

/*
 * action creators
 */

const changeUser = (result) => ({
    type: CHANGE_USER,
    userId: result.id,
    username: result.username,
    avatarUrl: result.avatarUrl,
    followingCount: result.following,
    followedCount: result.followed,
    signature: result.signature
});

export const getUser = (id) => {
    return (dispatch) => {
        axios.get('/api/users/1.json').then((res) => {
            const result = res.data;
            dispatch(changeUser(result));
        });
    }
}