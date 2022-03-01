import {ActionType} from "./store";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

export type ToggleFollowType = {
    type: typeof TOGGLE_FOLLOW
    userID: number
}
export type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
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
}
let initialState: UsersDataType = {

    users: [],
}


export const usersDataReducer = (state: UsersDataType = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)};
        case SET_USERS:
            return {...state, users: action.users}
        default:
            return state;
    }
}


export const toggleFollowAC = (userID: number): ToggleFollowType => ({type: TOGGLE_FOLLOW, userID})
export const setUsersAC = (users: Array<UsersType>): SetUsersType => ({type: SET_USERS, users})
