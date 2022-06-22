import React from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UsersProfilePropsType} from "../../redux/profileDataReducer";

type ProfileType = {
    authUserId: number
    profile: UsersProfilePropsType | null
    status: string
    updateUserStatusTC: (newStatus: string,) => void

}

export function Profile(props: ProfileType) {

    return (
        <div className={classes.profile}>
            <ProfileInfo {...props}/>
            {props.profile?.userId === props.authUserId && <MyPostsContainer/>}
        </div>
    );
};

