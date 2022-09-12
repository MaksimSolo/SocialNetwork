import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followUserTC, getUsersTC, unfollowUserTC, UsersType} from "../../redux/usersDataReducer";
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
} from "../../redux/usersSelectors";

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

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onChangingCurrentPage = (newPage: number) => {

        this.props.getUsersTC(newPage, this.props.pageSize);
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

// до создания функций селекторов ::::
// const mapStateToProps = (state: AppStateType) => ({
//     users: state.usersData.users,
//     totalUsersCount: state.usersData.totalUsersCount,
//     pageSize: state.usersData.pageSize,
//     currentPage: state.usersData.currentPage,
//     inProgress: state.usersData.inProgress,
//     toggleFollowFetchingQueue: state.usersData.toggleFollowFetchingQueue,
// });

const mapStateToProps = (state: AppStateType) => ({
    users: getUsersMainSelector(state),
    totalUsersCount: getTotalUsersCountMainSelector(state),
    pageSize: getPageSizeMainSelector(state),
    currentPage: getCurrentPageMainSelector(state),
    inProgress: getInProgressMainSelector(state),
    toggleFollowFetchingQueue: getToggleFollowFetchingQueueMainSelector(state),
});

//предыдущий вариант mapDispatchToProps
/*const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        toggleFollow: (userID: number) => {
            dispatch(toggleFollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        changeCurrentPage: (newPage: number) => {
            dispatch(changeCurrentPageAC(newPage))
        },
        setUsersTotalCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        },
        fetchingInProgress: (inProgress: boolean) => {
            dispatch(toggleInProgressAC(inProgress))
        }
    }
}*/


export default connect(mapStateToProps, {getUsersTC, unfollowUserTC, followUserTC,})(UsersContainer)
