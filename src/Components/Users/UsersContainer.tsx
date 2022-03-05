import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    changeCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFollow,
    toggleInProgress,
    UsersType
} from "../../redux/usersDataReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../Preloader/Preloader";

type UsersContainerPropType = {
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

class UsersContainer extends React.Component<UsersContainerPropType, AppStateType> {

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

    render = () =>
        <>
            {this.props.inProgress ? <Preloader/> : null}
            <Users users={this.props.users}
                   changeCurrentPage={this.props.changeCurrentPage}
                   onChangingCurrentPage={this.onChangingCurrentPage}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   setUsers={this.props.setUsers}
                   setUsersTotalCount={this.props.setUsersTotalCount}
                   totalUsersCount={this.props.totalUsersCount}
                   toggleFollow={this.props.toggleFollow}
            />
        </>
}

const mapStateToProps = (state: AppStateType) => ({
    users: state.usersData.users, totalUsersCount: state.usersData.totalUsersCount,
    pageSize: state.usersData.pageSize, currentPage: state.usersData.currentPage, inProgress: state.usersData.inProgress
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
        toggleInProgress: (inProgress: boolean) => {
            dispatch(toggleInProgressAC(inProgress))
        }
    }
}*/


export default connect(mapStateToProps,
    {
        toggleFollow,
        setUsers,
        changeCurrentPage,
        setUsersTotalCount,
        toggleInProgress
    })(UsersContainer)
