import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ActionType} from "../../redux/store";
import {
    changeCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleFollowAC,
    UsersType
} from "../../redux/usersDataReducer";
import {Users} from "./Users";

const mapStateToProps = (state: AppStateType) => ({users: state.usersData.users, totalUsersCount: state.usersData.totalUsersCount,
    pageSize: state.usersData.pageSize, currentPage: state.usersData.currentPage});
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        toggleFollow: (userID: number) => {
            dispatch(toggleFollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        changeCurrentPage: (newPage:number)=>{
          dispatch(changeCurrentPageAC(newPage))
        },
        setUsersTotalCount: (totalUsersCount:number)=>{
            dispatch(setUsersTotalCountAC(totalUsersCount))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
