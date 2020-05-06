import React from 'react';
import css from './Post.module.css';


const Post = (props) => {
    return (
        <div>
            <div className={css.item}>
                <img src="https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <p className={css.message}>{props.message}</p>
                <p className={css.likes}>likes: {props.likes}</p>
            </div>
        </div>
    )
}

export default Post;