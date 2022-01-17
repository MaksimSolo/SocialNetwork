import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from "../../redux/state";

export type ProfileType = {
    postData: Array<PostDataType>
    addPost: () => void
    updatePostText: (text: string) => void
    newPostText:string
}

export function Profile(props: ProfileType) {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     addPost={props.addPost}
                     updatePostText={props.updatePostText}
                     newPostText={props.newPostText}/>
        </div>
    );
};

