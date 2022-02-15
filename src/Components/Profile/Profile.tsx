import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionType, PostDataType} from "../../redux/store";

export type ProfileType = {
    postData: Array<PostDataType>
    dispatch: (action: ActionType) => void
    newPostText:string
}

export function Profile(props: ProfileType) {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}/>
        </div>
    );
};

