import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MSTPType = {
    isAuth: boolean
}
const mapStateToAuthRedirectProps = (state: AppStateType):MSTPType => ({
    isAuth: state.auth.isAuth,
});

export function withAuthRedirectComponent<T> (Component: ComponentType<T>) {
    const RedirectComponent= (props: MSTPType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToAuthRedirectProps)(RedirectComponent);
}
