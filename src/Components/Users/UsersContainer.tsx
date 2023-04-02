import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followUserTC, getUsersTC, unfollowUserTC, UsersType} from "../../redux/reducers/users-data-reducer";
import React from "react";
import {Users} from "./Users";
import Preloader from "../Preloader/Preloader";
import {
    getCurrentPageMainSelector,
    getInProgressMainSelector,
    getPageSizeMainSelector,
    getToggleFollowFetchingQueueMainSelector,
    getTotalUsersCountMainSelector,
    getUsersMainSelector
} from "../../redux/selectors/usersSelectors";

type UsersContainerPropType = {
    users: Array<UsersType>
    totalUsersCount: number,
    pageSize: number
    currentPage: number
    inProgress: boolean
    toggleFollowFetchingQueue: number[]
    getUsersTC: (currentPage: number, pageSize: number) => void
    unfollowUserTC: (userID: number) => void
    followUserTC: (userID: number) => void

}

class UsersContainer extends React.Component<UsersContainerPropType, AppStateType> {

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsersTC(currentPage, pageSize);
    }

    onChangingCurrentPage = (newPage: number) => {
        let {pageSize} = this.props
        this.props.getUsersTC(newPage, pageSize);
    }

    render = () =>
        <>
            {this.props.inProgress ? <Preloader/> : null}
            <Users users={this.props.users}
                   onChangingCurrentPage={this.onChangingCurrentPage}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   toggleFollowFetchingQueue={this.props.toggleFollowFetchingQueue}
                   unfollowUser={this.props.unfollowUserTC}
                   followUser={this.props.followUserTC}
            />
        </>
}

const mapStateToProps = (state: AppStateType) => ({
    users: getUsersMainSelector(state),
    totalUsersCount: getTotalUsersCountMainSelector(state),
    pageSize: getPageSizeMainSelector(state),
    currentPage: getCurrentPageMainSelector(state),
    inProgress: getInProgressMainSelector(state),
    toggleFollowFetchingQueue: getToggleFollowFetchingQueueMainSelector(state),
});

export default connect(mapStateToProps, {getUsersTC, unfollowUserTC, followUserTC,})(UsersContainer)
