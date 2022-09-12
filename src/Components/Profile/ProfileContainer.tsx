import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileTC,
    getUserStatusTC,
    updateUserStatusTC,
    UsersProfilePropsType
} from "../../redux/profileDataReducer";
import {withRouter} from "../../customWithRouter";
import {compose} from "redux";
import {withAuthRedirectComponent} from "../../highOrderComp/withAuthRedirectComponent";
import {getAuthUserIdMS, getProfileDataMS, getProfileStatusMS} from "../../redux/profileSelectors";


type ProfileContainerType = {
    authUserId: number
    profile: UsersProfilePropsType | null
    router: { location: any, navigation: any, params: any }
    getUserProfileTC: (userID: number) => void
    status: string
    getUserStatusTC: (userID: number) => void
    updateUserStatusTC: (newStatus: string,) => void
}


class ProfileContainer extends React.Component<ProfileContainerType, AppStateType> {

    componentDidMount() {

        let userID = this.props.router.params['*'];
        if (userID === '') {
            userID = this.props.authUserId
            if (!userID) {
                this.props.router.navigation('/login')
            }
        }
        this.props.getUserProfileTC(userID)
        this.props.getUserStatusTC(userID)
    }


    render = () => {

        return (<><Profile {...this.props} /></>);
    }
}

const mapStateToProps = (state: AppStateType) => {

    return ({
        profile: getProfileDataMS(state),
        authUserId: getAuthUserIdMS(state),
        status: getProfileStatusMS(state),
    })
}
export const WithRouterProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC}),
    withAuthRedirectComponent,
    withRouter
)(ProfileContainer)


