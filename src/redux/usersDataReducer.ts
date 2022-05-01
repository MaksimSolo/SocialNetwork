import {ActionType} from "./store";
import {apiUsersComp} from "../api/api-users";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_USERS_TOTALCOUNT = 'SET_USERS_TOTALCOUNT';
const TOGGLE_INPROGRESS = 'TOGGLE_INPROGRESS';
const SELECT_FROM_TOGGLE_FOLLOW_FETCHING_QUEUE = 'SELECT_FROM_TOGGLE_FOLLOW_FETCHING_QUEUE'

export type ToggleFollowType = {
    type: typeof TOGGLE_FOLLOW
    userID: number
}
export type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export type ChangeCurrentPageType = {
    type: typeof CHANGE_CURRENT_PAGE
    newPage: number
}
export type SetUsersTotalCountType = {
    type: typeof SET_USERS_TOTALCOUNT
    totalUsersCount: number
}
export type toggleInProgressType = {
    type: typeof TOGGLE_INPROGRESS
    inProgress: boolean
}

export type FollowFetchingQueueType = {
    type: typeof SELECT_FROM_TOGGLE_FOLLOW_FETCHING_QUEUE
    userID: number
    inProgress: boolean
}


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
export type UsersDataType = {
    users: Array<UsersType>
    totalUsersCount: number,
    pageSize: number
    currentPage: number
    inProgress: boolean
    toggleFollowFetchingQueue: number[];
}
let initialState: UsersDataType = {

    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    inProgress: false,
    toggleFollowFetchingQueue: [],
}


export const usersDataReducer = (state: UsersDataType = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)};
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


export const toggleFollow = (userID: number): ToggleFollowType => ({type: TOGGLE_FOLLOW, userID})
export const setUsers = (users: Array<UsersType>): SetUsersType => ({type: SET_USERS, users})
export const changeCurrentPage = (newPage: number): ChangeCurrentPageType => ({type: CHANGE_CURRENT_PAGE, newPage})
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCountType => ({
    type: SET_USERS_TOTALCOUNT,
    totalUsersCount
})
export const fetchingInProgress = (inProgress: boolean): toggleInProgressType => ({type: TOGGLE_INPROGRESS, inProgress})
export const selectFromToggleFollowFetchingQueue = (userID: number, inProgress: boolean): FollowFetchingQueueType => ({
    type: SELECT_FROM_TOGGLE_FOLLOW_FETCHING_QUEUE,
    userID,
    inProgress,
})

export const getAllUsersTC = (currentPage: number, pageSize: number): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {
        dispatch(fetchingInProgress(true));
        apiUsersComp.getAllUsersData(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(fetchingInProgress(false));
        });
    }
}

export const getUsersFromChangingPageTC = (newPage: number, pageSize: number): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {
        dispatch(changeCurrentPage(newPage));
        dispatch(fetchingInProgress(true));
        apiUsersComp.getUsersDataFromChangingPage(newPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(fetchingInProgress(false));
        });
    }
}

