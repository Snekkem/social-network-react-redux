import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    return (
        <div className={css.content}>
            <div className={css.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button type='button'>Add</button>
                    </div>
                </div>
                <div className={css.posts}>
                    {props.posts.map((p) => <Post message={p.post} likes={p.likes} key={p.id} />)}
                </div>
            </div>
        </div>)
}

export default MyPosts;