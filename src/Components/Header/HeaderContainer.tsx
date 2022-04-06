import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {applyAuthData, AuthDataType} from "../../redux/authReducer";
import {toggleInProgress} from "../../redux/usersDataReducer";
import Preloader from "../Preloader/Preloader";

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
        axios.get(`https://https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    this.props.applyAuthData(response.data)
                }
                this.props.toggleInProgress(false)
            })
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