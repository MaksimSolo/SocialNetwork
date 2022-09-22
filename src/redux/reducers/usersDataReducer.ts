import {ActionType} from "../store";
import {apiUsersComp} from "../../api/api-users";
import {AppThunk} from "../redux-store";
import {AxiosError} from "axios";
import {changeItemPropsInItemsArray, usersToggleFollowFlow} from "../../utils/users-reducer-assist";

const TOGGLE_FOLLOW = 'social-network/usersData/TOGGLE_FOLLOW';
const SET_USERS = 'social-network/usersData/SET_USERS';
const CHANGE_CURRENT_PAGE = 'social-network/usersData/CHANGE_CURRENT_PAGE';
const SET_USERS_TOTALCOUNT = 'social-network/usersData/SET_USERS_TOTALCOUNT';
const TOGGLE_INPROGRESS = 'social-network/usersData/TOGGLE_INPROGRESS';
const SELECT_FROM_TOGGLE_FOLLOW_FETCHING_QUEUE = 'social-network/usersData/SELECT_FROM_TOGGLE_FOLLOW_FETCHING_QUEUE'


let initialState = {

    users: [] as Array<UsersType> | [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    inProgress: false,
    toggleFollowFetchingQueue: [] as number[] | [],
}


export const usersDataReducer = (state: UsersDataType = initialState, action: ActionType): UsersDataType => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            // return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)};
            return {
                ...state,
                users: changeItemPropsInItemsArray(state.users,action.userID,"id","followed")
            }
        case SELECT_FROM_TOGGLE_FOLLOW_FETCHING_QUEUE:
            return {
                ...state,
                toggleFollowFetchingQueue: action.inProgress ? [...state.toggleFollowFetchingQueue, action.userID]
                    : state.toggleFollowFetchingQueue.filter(id => id !== action.userID)
            };
        case SET_USERS:
            return {...state, users: action.users}
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.newPage}
        case SET_USERS_TOTALCOUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_INPROGRESS:
            return {...state, inProgress: action.inProgress}
        default:
            return state;
    }
}

//action-creators
export const toggleFollow = (userID: number) => ({type: TOGGLE_FOLLOW, userID} as const)
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
export const changeCurrentPage = (newPage: number) => ({type: CHANGE_CURRENT_PAGE, newPage} as const)
export const setUsersTotalCount = (totalUsersCount: number) => ({
    type: SET_USERS_TOTALCOUNT,
    totalUsersCount
} as const)
export const fetchingInProgress = (inProgress: boolean) => ({type: TOGGLE_INPROGRESS, inProgress} as const)
export const selectFromToggleFollowFetchingQueue = (userID: number, inProgress: boolean) => ({
    type: SELECT_FROM_TOGGLE_FOLLOW_FETCHING_QUEUE,
    userID,
    inProgress,
} as const)


//thunk-creators
export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => async dispatch => {
    try {
        dispatch(fetchingInProgress(true));
        dispatch(changeCurrentPage(currentPage));
        const responseData = await apiUsersComp.getUsersData(currentPage, pageSize);
        dispatch(setUsers(responseData.data.items));
        dispatch(setUsersTotalCount(responseData.data.totalCount));
        dispatch(fetchingInProgress(false));
    } catch (err) {
        const error = err as AxiosError
        console.log(error)
    }
}

export const unfollowUserTC = (userID: number,): AppThunk => async dispatch => {
    await usersToggleFollowFlow(dispatch, userID, apiUsersComp.unfollowUser)
}

export const followUserTC = (userID: number,): AppThunk => async dispatch => {
    await usersToggleFollowFlow(dispatch, userID, apiUsersComp.postForFollowUser)
}

//types
export type UsersDataType = typeof initialState
export type ToggleFollowType = ReturnType<typeof toggleFollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type ChangeCurrentPageType = ReturnType<typeof changeCurrentPage>
export type SetUsersTotalCountType = ReturnType<typeof setUsersTotalCount>
export type toggleInProgressType = ReturnType<typeof fetchingInProgress>
export type FollowFetchingQueueType = ReturnType<typeof selectFromToggleFollowFetchingQueue>

type PhotoUserType = {
    small: string
    large: string
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotoUserType
    status: string
    followed: boolean
}

export type KeysUsersType = keyof UsersType

// export type UsersDataType = {
//     users: Array<UsersType>
//     totalUsersCount: number,
//     pageSize: number
//     currentPage: number
//     inProgress: boolean
//     toggleFollowFetchingQueue: number[];
// }