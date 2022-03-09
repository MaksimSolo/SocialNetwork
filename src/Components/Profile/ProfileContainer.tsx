import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, UsersProfilePropsType} from "../../redux/profileDataReducer";
import axios from "axios";
import {withRouter} from "../../customWithRouter";


type ProfileContainerType = {
    setUserProfile: (profile: UsersProfilePropsType | null) => void
    profile: UsersProfilePropsType | null
    router: { location: any, navigation: any, params: any }

}


class ProfileContainer extends React.Component<ProfileContainerType, AppStateType> {

    componentDidMount() {

        let userID = this.props.router.params['*'];
        if (userID === '') {
            userID = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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


export const WithRouterProfileContainer = withRouter(connect(mapStateToProps, {setUserProfile})(ProfileContainer))
