import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import { AddPostForm } from "./components/AddPostForm";
import { PostsList } from "./components/PostList";
import { SinglePostPage } from "./components/SinglePostPage";

const App = () => {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <>
                                <AddPostForm />
                                <PostsList />
                            </>
                        )}
                    />
                    <Route exact path="/posts/:postId" component={SinglePostPage} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );

};

export default App;
