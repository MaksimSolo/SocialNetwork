import React from "react";
import classes from "./ProfileInfo.module.css";
import {UsersProfilePropsType} from "../../../redux/reducers/profile-data-reducer";
import Preloader from "../../Preloader/Preloader";
import userPhoto from "./../../../images/userr.png";
import {ProfileStatusOnHooks} from "./ProfileStatusOnHooks";

export type ProfileInfoType = {
    profile: UsersProfilePropsType | null
    authUserId: number
    updateUserStatusTC: (newStatus: string,) => void
    status: string
}

export const ProfileInfo: React.FC<ProfileInfoType> = (
    {
        profile,
        ...props
    }
) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.small ? profile.photos.small : userPhoto}
                     className={classes.usersPhoto}/>
                <div>ID: {profile.userId}</div>
                <div>Name: {profile.fullName}</div>
                <ProfileStatusOnHooks {...props} userID={profile.userId}/>
                {profile.aboutMe && <div>About: {profile.aboutMe}</div>}
                {profile.contacts.facebook && <div>facebook: {profile.contacts.facebook}</div>}
                {profile.contacts.website && <div>website: {profile.contacts.website}</div>}
                {profile.contacts.vk && <div>vk: {profile.contacts.vk}</div>}
                {profile.contacts.twitter && <div>twitter: {profile.contacts.twitter}</div>}
                {profile.contacts.instagram && <div>instagram: {profile.contacts.instagram}</div>}
                {profile.contacts.youtube && <div>youtube: {profile.contacts.youtube}</div>}
                {profile.contacts.github && <div>github: {profile.contacts.github}</div>}
                {profile.contacts.mainLink && <div>mainLink: {profile.contacts.mainLink}</div>}
            </div>
        </div>
    )
}