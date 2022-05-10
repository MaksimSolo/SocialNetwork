import React from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UsersProfilePropsType} from "../../redux/profileDataReducer";

type ProfileType = {

    profile: UsersProfilePropsType | null
}

export function Profile(props: ProfileType) {

    return (
        <div className={classes.profile}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
};

