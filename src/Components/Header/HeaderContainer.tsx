import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthDataType, getAuthUserDataTC} from "../../redux/authReducer";
import Preloader from "../Preloader/Preloader";

export type HeaderContainerCompType = {
    data: AuthDataType,
    getAuthUserDataTC: () => void
    inProgress: boolean,
    isAuth: boolean,
}

class HeaderContainerComp extends React.Component<HeaderContainerCompType, AppStateType> {

    componentDidMount() {
        this.props.getAuthUserDataTC();
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

const mapStateToProps = (state: AppStateType) => ({
    data: state.auth.data,
    inProgress: state.auth.inProgress,
    isAuth: state.auth.isAuth
})

export const HeaderContainer = connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainerComp)