import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, UsersProfilePropsType} from "../../redux/profileDataReducer";
import {withRouter} from "../../customWithRouter";
import {withAuthRedirectComponent} from "../../highOrderComp/withAuthRedirectComponent";


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
            userID = 22177
        }
        this.props.getUserProfileTC(userID)
    }


    render = () => {
        return (
            <>
                <Profile {...this.props} />
            </>
        );
    }
}


const mapStateToProps = (state: AppStateType) => ({profile: state.profileData.usersProfile,})
export const WithRouterProfileContainer = withAuthRedirectComponent(withRouter(connect(mapStateToProps, {getUserProfileTC})(ProfileContainer)))


