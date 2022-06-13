import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthDataType, logoutUserTC} from "../../redux/authReducer";
import Preloader from "../Preloader/Preloader";

export type HeaderContainerCompType = {
    logoutUserTC: () => void,
    data: AuthDataType,
    inProgress: boolean,
    isAuth: boolean,
}

class HeaderContainerComp extends React.Component<HeaderContainerCompType, AppStateType> {
    render = () => {
        return (
            <>
                {this.props.inProgress ? <Preloader/> : null}
                <Header {...this.props}/>
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    data: state.auth.data,
    inProgress: state.auth.inProgress,
    isAuth: state.auth.isAuth
})

export const HeaderContainer = connect(mapStateToProps, {logoutUserTC})(HeaderContainerComp)