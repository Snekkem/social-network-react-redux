import React from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <div className={css.description}>
                ava + decr
            </div>
        </div>)
}

export default ProfileInfo;