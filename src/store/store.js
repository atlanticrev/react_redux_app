import { createStore } from "redux";
import { rootReducer } from './reducers';

const initialState = {
    posts: [
        { id: '1', title: 'First Post!', content: 'Hello!' },
        { id: '2', title: 'Second Post', content: 'More text' }
    ]
};

// Store
const Store = createStore(rootReducer, initialState);

export { Store };