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
            <div>
                <img
                    src='https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg='/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                <div>ID: {props.profile.userId}</div>

                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>

            </div>
        </div>
    )
}