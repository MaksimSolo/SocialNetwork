import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {connect} from "react-redux";
import {applyAuthData, AuthDataType} from "../../redux/authReducer";
import {toggleInProgress} from "../../redux/usersDataReducer";
import Preloader from "../Preloader/Preloader";
import {getAuthData} from "../../api/api-header";

export type HeaderContainerCompType = {
    data: AuthDataType,
    toggleInProgress: (inProgress: boolean) => void,
    applyAuthData: (data: AuthDataType) => void,
    inProgress: boolean,
    isAuth: boolean,
}

class HeaderContainerComp extends React.Component<HeaderContainerCompType, AppStateType> {

    componentDidMount() {
        this.props.toggleInProgress(true)
        getAuthData().then(response => {
            if (response.data.resultCode === 0) {
                this.props.applyAuthData(response.data)
            }
            this.props.toggleInProgress(false)
        });
    }

    render = () => {

        return (
            <>
                {this.props.inProgress ? <Preloader/> : null}
                <Header {...this.props}/>
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({data: state.auth.data, inProgress: state.auth.inProgress, isAuth: state.auth.isAuth})

export const HeaderContainer = connect(mapStateToProps, {applyAuthData, toggleInProgress})(HeaderContainerComp)