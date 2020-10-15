import React from 'react';

export const Post = (props) => {
    return (
        <section>
            <h2>{props.post.title}</h2>
            <p>
                {
                    props.short && props.post.content.length > 10
                        ? `${props.post.content.substring(0, 10).trim()}...`
                        : props.post.content
                }
            </p>
        </section>
    );
};
Post.IDS = 2;