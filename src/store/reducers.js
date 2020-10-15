import { POSTS_ADD } from "./actions";

const rootReducer = (state, action) => {
    switch (action.type) {
        case POSTS_ADD:
            return {
                posts: state.posts.concat({
                    id: action.payload.id,
                    title: action.payload.title,
                    content: action.payload.content
                })
            };
        default:
            return state;
    }
};

export { rootReducer };