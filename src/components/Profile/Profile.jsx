import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <div>
                ava + decr
            </div>

            <MyPosts />
        </div>)
}

export default Profile;