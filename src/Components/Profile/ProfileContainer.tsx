import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileTC, UsersProfilePropsType} from "../../redux/profileDataReducer";
import {withRouter} from "../../customWithRouter";
import {getUserData} from "../../api/api-profile";


type ProfileContainerType = {

    profile: UsersProfilePropsType | null
    router: { location: any, navigation: any, params: any }
    setUserProfileTC: (userID: number) => void
}


class ProfileContainer extends React.Component<ProfileContainerType, AppStateType> {

    componentDidMount() {

        let userID = this.props.router.params['*'];
        if (userID === '') {
            userID = 2
        }
        this.props.setUserProfileTC(userID)
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


export const WithRouterProfileContainer = withRouter(connect(mapStateToProps, {setUserProfileTC})(ProfileContainer))
