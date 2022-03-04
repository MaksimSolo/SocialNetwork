import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ActionType} from "../../redux/store";
import {
    changeCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleFollowAC, toggleInProgressAC, toggleInProgressType,
    UsersType
} from "../../redux/usersDataReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type UsersAPIComponentPropType = {
    users: Array<UsersType>
    totalUsersCount: number,
    pageSize: number
    currentPage: number
    toggleFollow: (userID: number) => void
    toggleInProgress: (inProgress: boolean) => void,
    inProgress: boolean
    setUsers: (users: Array<UsersType>) => void
    changeCurrentPage: (newPage: number) => void
    setUsersTotalCount: (totalUsersCount: number) => void
}

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropType, AppStateType> {

    componentDidMount() {
        this.props.toggleInProgress(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)
                this.props.toggleInProgress(false)
            }
        );
    }

    onChangingCurrentPage = (newPage: number) => {
        this.props.changeCurrentPage(newPage);
        this.props.toggleInProgress(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleInProgress(false)
            }
        );
    }

    render = () => <Users users={this.props.users}
                          changeCurrentPage={this.props.changeCurrentPage}
                          onChangingCurrentPage={this.onChangingCurrentPage}
                          currentPage={this.props.currentPage}
                          pageSize={this.props.pageSize}
                          setUsers={this.props.setUsers}
                          setUsersTotalCount={this.props.setUsersTotalCount}
                          totalUsersCount={this.props.totalUsersCount}
                          toggleFollow={this.props.toggleFollow}
                          inProgress={this.props.inProgress}
    />

}

const mapStateToProps = (state: AppStateType) => ({
    users: state.usersData.users, totalUsersCount: state.usersData.totalUsersCount,
    pageSize: state.usersData.pageSize, currentPage: state.usersData.currentPage, inProgress: state.usersData.inProgress
});
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
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
        toggleInProgress: (inProgress: boolean) => {
            dispatch(toggleInProgressAC(inProgress))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
