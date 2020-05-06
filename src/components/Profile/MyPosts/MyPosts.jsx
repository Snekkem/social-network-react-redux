import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={css.content}>
            <div>
                my post
                <div>
                    new post
                </div>
                <div className='posts'>
                    <Post message='hi, how are you?' likes='22' />
                    <Post message="hi, i'm fine!" likes='33' />
                </div>
            </div>
        </div>)
}

export default MyPosts;