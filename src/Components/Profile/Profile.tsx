import React from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    // store: StoreType
    }

export function Profile(props: ProfileType) {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};

