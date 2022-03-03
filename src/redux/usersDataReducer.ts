import {ActionType} from "./store";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_USERS_TOTALCOUNT = 'SET_USERS_TOTALCOUNT';

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
}
let initialState: UsersDataType = {

    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1
}


export const usersDataReducer = (state: UsersDataType = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)};
        case SET_USERS:
            return {...state, users: action.users}
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.newPage}
        case SET_USERS_TOTALCOUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state;
    }
}


export const toggleFollowAC = (userID: number): ToggleFollowType => ({type: TOGGLE_FOLLOW, userID})
export const setUsersAC = (users: Array<UsersType>): SetUsersType => ({type: SET_USERS, users})
export const changeCurrentPageAC = (newPage: number): ChangeCurrentPageType => ({type: CHANGE_CURRENT_PAGE, newPage})
export const setUsersTotalCountAC = (totalUsersCount: number): SetUsersTotalCountType => ({
    type: SET_USERS_TOTALCOUNT,
    totalUsersCount
})
