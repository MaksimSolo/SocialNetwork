import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthDataType, logoutUserTC} from "../../redux/reducers/authReducer";
import Preloader from "../Preloader/Preloader";
import {getAuthDataMS, getAuthInProgressMS, getIsAuthMS} from "../../redux/selectors/headerSelectors";

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
    data: getAuthDataMS(state),
    inProgress: getAuthInProgressMS(state),
    isAuth: getIsAuthMS(state),
})

export const HeaderContainer = connect(mapStateToProps, {logoutUserTC})(HeaderContainerComp)