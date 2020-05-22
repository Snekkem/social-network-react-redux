import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (postText) => {
        props.updateNewPostText(postText);
    }

    return (
        <div>
            <div className={css.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea className={css.textPost}
                            onChange={(e) => onPostChange(e.target.value)} value={props.newPostText} />
                    </div>
                    <div>
                        <button type='button' onClick={onAddPost}>Add</button>
                    </div>
                </div>
                <div className={css.posts}>
                    {props.posts.map((p) => <Post message={p.post} likes={p.likes} key={p.id} />)}
                </div>
            </div>
        </div>)
}

export default MyPosts;