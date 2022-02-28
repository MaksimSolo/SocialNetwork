import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {ActionType} from "../../redux/store";
import {setUsersAC, toggleFollowAC, UsersType} from "../../redux/usersDataReducer";

const mapStateToProps = (state: AppStateType) => ({users: state.usersData.users});
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        toggleFollow: (userID: string) => {
            dispatch(toggleFollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
