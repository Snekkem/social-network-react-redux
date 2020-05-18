import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let addPost = () => {
        props.addPost();
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (postText) => {
        props.dispatch(updateNewPostTextActionCreator(postText));
    }
    console.log('props :>> ', props);
    return (
        <div className={css.content}>
            <div className={css.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea className={css.textPost}
                            onChange={(e) => onPostChange(e.target.value)} value={props.newPostText} />
                    </div>
                    <div>
                        <button type='button' onClick={addPost}>Add</button>
                    </div>
                </div>
                <div className={css.posts}>
                    {props.posts.map((p) => <Post message={p.post} likes={p.likes} key={p.id} />)}
                </div>
            </div>
        </div>)
}

export default MyPosts;