import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthDataType} from "../../redux/reducers/auth-reducer";

type HeaderProps = {
    logoutUserTC: () => void,
    data: AuthDataType,
    isAuth: boolean,
}
export const Header = (props: HeaderProps) => {

    return (
        <header className={classes.header}>
            <img src="https://www.logodesign.net/images/nature-logo.png"/>
            {props.isAuth ?
                <div className={classes.loginBlock}>
                    <div>id: {props.data.id}</div>
                    <div>login: {props.data.login}</div>
                    <div>email: {props.data.email}</div>
                    <button onClick={props.logoutUserTC}>Log Out</button>
                </div>
                : <div className={classes.loginBlock}>
                    <NavLink to='/login' className={({isActive}) => isActive ? classes.active : ''}>Log in</NavLink>
                </div>}
        </header>
    );
};

