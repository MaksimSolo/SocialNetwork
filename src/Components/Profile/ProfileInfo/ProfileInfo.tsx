import React, {ChangeEvent} from "react";
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
  isOwner: boolean

}

export const ProfileInfo = ({profile, isOwner, ...props}: ProfileInfoType) => {
  if (!profile) {
    return <Preloader/>
  }

  const onAvatarUploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      console.log(file)
    }
  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.small ?? userPhoto}
             className={classes.usersPhoto} alt=''/>

        <div>{isOwner && <input type={"file"} onChange={onAvatarUploadHandler}/>}</div>
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