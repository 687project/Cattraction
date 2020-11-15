/*
 * action types
 */

export const CHANGE_POST_DATA = 'Post/change_post_data';
export const CLEAR_POST_DATA = 'Post/clear_post_data';

/*
 * action creators
 */

export const changHomeContentData = (result) => ({
    type: CHANGE_POST_DATA,
    post: result
});

export const clearContentData = () => ({
    type: CLEAR_POST_DATA
});