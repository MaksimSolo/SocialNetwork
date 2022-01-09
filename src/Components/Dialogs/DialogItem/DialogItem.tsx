import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType = {
    id: string
    name: string
}
export const DialogItem = (props: DialogItemType) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}
                     className={({isActive}) => isActive ? classes.active : ''}>{props.name}</NavLink>
        </div>
    );
};