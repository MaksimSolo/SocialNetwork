import React from "react";
import classes from "./ProfileInfo.module.css";
import {UsersProfilePropsType} from "../../../redux/profileDataReducer";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "./../../../images/userr.png";
import {ProfileStatusOnHooks} from "./ProfileStatusOnHooks";

export type ProfileInfoType = {
    profile: UsersProfilePropsType | null
    authUserId: number
    updateUserStatusTC: (newStatus: string,) => void
    status: string
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.small ? props.profile.photos.small : userPhoto}
                     className={classes.usersPhoto}/>
                <div>ID: {props.profile.userId}</div>
                <div>Name: {props.profile.fullName}</div>
                <ProfileStatusOnHooks {...props} userID={props.profile.userId}/>
                {props.profile.aboutMe && <div>About: {props.profile.aboutMe}</div>}
                {props.profile.contacts.facebook && <div>facebook: {props.profile.contacts.facebook}</div>}
                {props.profile.contacts.website && <div>website: {props.profile.contacts.website}</div>}
                {props.profile.contacts.vk && <div>vk: {props.profile.contacts.vk}</div>}
                {props.profile.contacts.twitter && <div>twitter: {props.profile.contacts.twitter}</div>}
                {props.profile.contacts.instagram && <div>instagram: {props.profile.contacts.instagram}</div>}
                {props.profile.contacts.youtube && <div>youtube: {props.profile.contacts.youtube}</div>}
                {props.profile.contacts.github && <div>github: {props.profile.contacts.github}</div>}
                {props.profile.contacts.mainLink && <div>mainLink: {props.profile.contacts.mainLink}</div>}
            </div>
        </div>
    )
}