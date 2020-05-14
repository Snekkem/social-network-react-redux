import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={css.content}>
            <div className={css.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea className={css.textPost} ref={newPostElement}
                            onChange={onPostChange} value={props.newPostText} />
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