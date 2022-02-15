import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {FriendsDataType} from "../../redux/store";

type NavbarType = {
    friendsData: Array<FriendsDataType>
}

export const Navbar = (props: NavbarType) => {
        const friendsItems = props.friendsData.map(friend => <Friends id={friend.id} name={friend.name} img={friend.img}/>)
        return (
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to='/profile' className={({isActive}) => isActive ? classes.active : ''}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' className={({isActive}) => isActive ? classes.active : ''}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' className={({isActive}) => isActive ? classes.active : ''}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music' className={({isActive}) => isActive ? classes.active : ''}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings'
                             className={({isActive}) => isActive ? classes.active : ''}>Settings</NavLink>
                </div>
                <div className={classes.friends}>
                    <h2>Friends</h2>

                        {friendsItems}

                </div>
            </nav>
        );
    }
;

