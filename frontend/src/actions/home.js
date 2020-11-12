import axios from 'axios';

/*
 * action types
 */

export const CHANGE_HOME_CONTENT_DATA = 'Home/change_home_content_data';

/*
 * action creators
 */

const changHomeContentData = (result) => ({
    type: CHANGE_HOME_CONTENT_DATA,
    postList: result,
});

export const getHomeContent = (topic = 'daily-feed') => {
    return (dispatch) => {
        axios.get(`/api/posts/t/${topic}.json`).then((res) => {
            const result = res.data;
            dispatch(changHomeContentData(result));
        }).catch((err) => {
            console.log(err);
        });
    }
}