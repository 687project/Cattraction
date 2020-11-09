import axios from 'axios';

/*
 * action types
 */

export const CHANGE_POST_DATA = 'Post/change_post_data';
export const CHANGE_POST_DATA_FAIL = 'Post/change_post_data_fail';

/*
 * action creators
 */

const changHomeContentData = (result) => ({
    type: CHANGE_POST_DATA,
    post: result
});

const changHomeContentFail = () => ({
    type: CHANGE_POST_DATA_FAIL
});

export const getPostContent = (id) => {
    return (dispatch) => {
        axios.get(`/api/posts/${id}.json`)
            .then((res) => {
                const result = res.data;
                dispatch(changHomeContentData(result));
            })
            .catch((err) => {
                console.log(err);
                dispatch(changHomeContentFail());
            });
    }
}