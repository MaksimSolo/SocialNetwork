import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "../../customWithRouter";
import {withAuthRedirectComponent} from "../../highOrderComp/withAuthRedirectComponent";
import {
    getUserProfileTC,
    getUserStatusTC,
    updateUserStatusTC,
    UsersProfilePropsType
} from "../../redux/reducers/profile-data-reducer";
import {AppStateType} from "../../redux/redux-store";
import {
    selectAuthUserIdMain,
    selectProfileStatusMain,
    selectUserProfileDataMain
} from "../../redux/selectors/profileSelectors";
import {Profile} from "./Profile";


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
        profile: selectUserProfileDataMain(state),
        authUserId: selectAuthUserIdMain(state),
        status: selectProfileStatusMain(state),
    })
}
export const ProfileContainerWithRouter = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC}),
    withAuthRedirectComponent,
    withRouter
)(ProfileContainer)


