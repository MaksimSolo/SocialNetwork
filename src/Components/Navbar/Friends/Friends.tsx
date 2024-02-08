import React from 'react';
import classes from "../Navbar.module.css";

type FriendsType = {
    id: string
    name: string
    img: string
}

export const Friends = (props: FriendsType) => {
    return (
        <div className={classes.friendItem}>
            <img className={classes.img}
                 src={props.img}
                 alt=''/>
            <div><b>{props.name}</b></div>
        </div>
    );
};

