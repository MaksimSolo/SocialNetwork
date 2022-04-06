import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthDataType} from "../../redux/authReducer";

type HeaderProps = {
    data: AuthDataType,
    isAuth: boolean,
}
export const Header = (props: HeaderProps) => {
    return (
        <header className={classes.header}>
            <img src="https://www.logodesign.net/images/nature-logo.png"/>
            {props.isAuth ?
                <div className={classes.loginBlock}>
                    {props.data.id}
                    {props.data.login}
                    {props.data.email}
                </div>
                : <div className={classes.loginBlock}>
                    <>props.data.id, props.data.login, props.data.email</>
                    : <NavLink to='/login' className={({isActive}) => isActive ? classes.active : ''}>LOGIN</NavLink>
                </div>}
        </header>
    );
};

