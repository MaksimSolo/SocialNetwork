import {ActionType, ProfileDataType,} from "./store";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {apiProfileComp, apiProfileInstance} from "../api/api-profile";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
// const UPD_USER_STATUS = 'UPD_USER_STATUS';

let initialState: ProfileDataType = {
    postData: [
        {id: '1', message: "Hi,guys, i'm still in Bryansk today!", likeCount: 2345},
        {id: '2', message: "Merry Christmas and Happy NY, everybody!", likeCount: 987}
    ],
    usersProfile: null,
    status: '',
}

export const profileDataReducer = (state: ProfileDataType = initialState, action: ActionType): ProfileDataType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state, postData: [...state.postData, {
                    id: JSON.stringify(new Date().getTime()),
                    message: action.postText,
                    likeCount: 0
                }],
            };
        case SET_USER_PROFILE:
            return {...state, usersProfile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

//action-creators
export const addPostAC = (postText: string): AddPostType => ({type: ADD_POST, postText});
export const setUserProfile = (profile: UsersProfilePropsType | null): SetUserProfileType => ({
    type: SET_USER_PROFILE,
    profile
})
export const setUserStatus = (status: string): SetUserStatusType => ({
    type: SET_USER_STATUS,
    status
})
export const updateUserStatus = (status: string): SetUserStatusType => ({
    type: SET_USER_STATUS,
    status
})

//thunk-creator
export const getUserProfileTC = (userID: number): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {
        apiProfileComp.getUserProfileData(userID).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}
export const getUserStatusTC = (userID: number): ThunkAction<void, AppStateType, unknown, ActionType> => dispatch =>
    apiProfileComp.getUserProfileStatus(userID).then(r => {
        console.log(r)
        dispatch(setUserStatus(r))
    })

export const updateUserStatusTC = (newStatus: string): ThunkAction<void, AppStateType, unknown, ActionType> =>
    dispatch => apiProfileComp.updateUserProfileStatus(newStatus).then(() =>
        dispatch(setUserStatus(newStatus)))


//types
export type AddPostType = {
    type: typeof ADD_POST
    postText: string
}
export type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: UsersProfilePropsType | null,
}
export type SetUserStatusType = {
    type: typeof SET_USER_STATUS
    status: string,
}


export type UsersProfilePropsType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string,
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string,
    }
}