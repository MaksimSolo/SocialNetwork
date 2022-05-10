import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, UsersProfilePropsType} from "../../redux/profileDataReducer";
import {withRouter} from "../../customWithRouter";
import {Navigate} from "react-router-dom";


type ProfileContainerType = {
    isAuth: boolean
    profile: UsersProfilePropsType | null
    router: { location: any, navigation: any, params: any }
    getUserProfileTC: (userID: number) => void
}


class ProfileContainer extends React.Component<ProfileContainerType, AppStateType> {

    componentDidMount() {

        let userID = this.props.router.params['*'];
        if (userID === '') {
            userID = 2
        }
        this.props.getUserProfileTC(userID)
    }


    render = () => {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
            <>
                <Profile {...this.props} />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({profile: state.profileData.usersProfile, isAuth: state.auth.isAuth,})


export const WithRouterProfileContainer = withRouter(connect(mapStateToProps, {getUserProfileTC})(ProfileContainer))
