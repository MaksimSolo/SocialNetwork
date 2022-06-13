import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, UsersProfilePropsType} from "../../redux/profileDataReducer";
import {withRouter} from "../../customWithRouter";
import {compose} from "redux";
import {withAuthRedirectComponent} from "../../highOrderComp/withAuthRedirectComponent";


type ProfileContainerType = {
    authUserId: number
    profile: UsersProfilePropsType | null
    router: { location: any, navigation: any, params: any }
    getUserProfileTC: (userID: number) => void
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
    }


    render = () => {
        return (<><Profile {...this.props} /></>);
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profileData.usersProfile,
    authUserId: state.auth.data.id
})
export const WithRouterProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC}),
    withAuthRedirectComponent,
    withRouter
)(ProfileContainer)


