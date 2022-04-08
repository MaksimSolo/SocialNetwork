import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, UsersProfilePropsType} from "../../redux/profileDataReducer";
import {withRouter} from "../../customWithRouter";
import {getUserData} from "../../api/api-profile";


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
        getUserData (userID).then(response => {
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
