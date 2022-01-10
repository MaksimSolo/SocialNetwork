import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from "../../redux/state";

export type ProfileType = {
    postData: Array<PostDataType>
}

export function Profile(props: ProfileType) {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
};

