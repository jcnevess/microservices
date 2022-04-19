import React from 'react';

export default ({ comments }) => {
    const renderedComments = comments.map(comment => {
        let content;

        switch(comment.status) {
            case 'approved':
                content = comment.content;
                break;
            case 'pending':
                content = 'Comment awaiting moderation.';
                break;
            case 'rejected':
                content = 'Comment rejected by moderation.';
                break;
        }

        return <li key={comment.id}>{content}</li>
    });

    return <ul>{ renderedComments }</ul>
};