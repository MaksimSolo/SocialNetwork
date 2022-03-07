import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, UsersProfilePropsType} from "../../redux/profileDataReducer";
import axios from "axios";

type ProfileContainerType = {
    setUserProfile: (profile: UsersProfilePropsType | null) => void
    profile: UsersProfilePropsType | null
}


class ProfileContainer extends React.Component<ProfileContainerType, AppStateType> {

    componentDidMount() {
        if (this.props.profile === null) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3521`).then(response => {
                this.props.setUserProfile(response.data)
            })
        }
    }

    render = () => {
        return (
            <>
                <Profile {...this.props}/>
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({profile: state.profileData.usersProfile,})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
