import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
const App = ()  => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today @ 4:15PM" picture={faker.image.avatar()} comment="A  qp"/>
            <CommentDetail author="Alex" timeAgo="Yesterday @ 4:15PM" picture={faker.image.avatar()} comment="w"/>
            <CommentDetail author="Jane" timeAgo="May 4 @ 4:15PM" picture={faker.image.avatar()} comment="Nice"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))