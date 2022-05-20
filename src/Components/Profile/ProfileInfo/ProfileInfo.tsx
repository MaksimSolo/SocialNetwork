import React from "react";
import classes from "./ProfileInfo.module.css";
import {UsersProfilePropsType} from "../../../redux/profileDataReducer";
import Preloader from "../../Preloader/Preloader";

export type ProfileInfoType = {
    profile: UsersProfilePropsType | null
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                <div>ID: {props.profile.userId}</div>

                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>

            </div>
        </div>
    )
}