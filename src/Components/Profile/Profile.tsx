import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export function Profile() {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

