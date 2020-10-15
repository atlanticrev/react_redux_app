import React from 'react';
import { useSelector } from "react-redux";

import { Post } from './Post';

export const SinglePostPage = (props) => {
    const { match } = props;
    const { postId } = match.params;

    const post = useSelector(state => state.posts.find(post => post.id === postId));

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        );
    }

    return (
        <Post post={post} short={false}/>
    );
};