export const POSTS_ADD = 'POSTS/ADD';

export const addPost = (payload) => {
    return {type: POSTS_ADD, payload};
};
