import React from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UsersProfilePropsType} from "../../redux/reducers/profile-data-reducer";

type ProfileProps = {
  authUserId: number
  profile: UsersProfilePropsType | null
  status: string
  updateUserStatusTC: (newStatus: string,) => void
  isOwner: boolean

}

export function Profile(props: ProfileProps) {
  return (
    <div className={classes.profile}>
      <ProfileInfo {...props}/>
      {props.profile?.userId === props.authUserId && <MyPostsContainer/>}
    </div>
  );
}

