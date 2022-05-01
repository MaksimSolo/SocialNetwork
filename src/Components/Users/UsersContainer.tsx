import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    fetchingInProgress,
    getAllUsersTC,
    getUsersFromChangingPageTC,
    selectFromToggleFollowFetchingQueue,
    toggleFollow,
    UsersType
} from "../../redux/usersDataReducer";
import React from "react";
import {Users} from "./Users";
import Preloader from "../Preloader/Preloader";

type UsersContainerPropType = {
    users: Array<UsersType>
    totalUsersCount: number,
    pageSize: number
    currentPage: number
    toggleFollow: (userID: number) => void
    fetchingInProgress: (inProgress: boolean)=> void
    inProgress: boolean
    selectFromToggleFollowFetchingQueue: (userID: number, inProgress: boolean) => void
    toggleFollowFetchingQueue: number[]
    getAllUsersTC: (currentPage: number, pageSize: number) => void
    getUsersFromChangingPageTC: (newPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropType, AppStateType> {

    componentDidMount() {
        this.props.getAllUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onChangingCurrentPage = (newPage: number) => {
        this.props.getUsersFromChangingPageTC(newPage, this.props.pageSize);
    }

    render = () =>
        <>
            {this.props.inProgress ? <Preloader/> : null}
            <Users users={this.props.users}
                   onChangingCurrentPage={this.onChangingCurrentPage}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   toggleFollow={this.props.toggleFollow}
                   fetchingInProgress={this.props.fetchingInProgress}
                   inProgress={this.props.inProgress}
                   selectFromToggleFollowFetchingQueue={this.props.selectFromToggleFollowFetchingQueue}
                   toggleFollowFetchingQueue={this.props.toggleFollowFetchingQueue}
            />
        </>
}

const mapStateToProps = (state: AppStateType) => ({
    users: state.usersData.users,
    totalUsersCount: state.usersData.totalUsersCount,
    pageSize: state.usersData.pageSize,
    currentPage: state.usersData.currentPage,
    inProgress: state.usersData.inProgress,
    toggleFollowFetchingQueue: state.usersData.toggleFollowFetchingQueue
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


export default connect(mapStateToProps,
    {
        toggleFollow,
        fetchingInProgress,
        selectFromToggleFollowFetchingQueue,
        getAllUsersTC,
        getUsersFromChangingPageTC,
    })(UsersContainer)
