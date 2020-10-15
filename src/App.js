import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import { AddPostForm } from "./components/AddPostForm";
import { PostsList } from "./components/PostList";

const App = () => {

    return (
        <div className="App">
            <AddPostForm />
            <PostsList />
        </div>
    );

};

export default App;
