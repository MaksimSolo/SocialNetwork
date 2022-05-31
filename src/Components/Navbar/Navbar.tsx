import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {FriendsSideBarType} from "../../redux/store";

type NavbarType = {
    friendsSideBar: FriendsSideBarType
    doSome: () => void
    isAuth: boolean
}

export const Navbar = (props: NavbarType) => {

    const friendsItems = props.friendsSideBar.friendsData.map((friend) => {
            return <Friends key={friend.id} id={friend.id} name={friend.name} img={friend.img}/>
        }
    )
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
            <div className={classes.item}>
                <NavLink to='/users'
                         className={({isActive}) => isActive ? classes.active : ''}>Users</NavLink>
            </div>
            <div className={classes.friends}>
                <h2>Friends</h2>

                {friendsItems}

            </div>
        </nav>
    )
}

