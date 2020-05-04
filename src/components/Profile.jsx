import React from 'react';
import css from './Profile.module.css';

const Profile = () => {
    return (
        <div className={css.content}>
            <div>
                <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <div>
                ava + decr
            </div>

            <div>
                my post
                <div>
                    new post
                </div>
                <div className='posts'>
                    <div className={css.item}>post 1</div>
                    <div className={css.item}>post 2</div>
                </div>
            </div>
        </div>)
}

export default Profile;