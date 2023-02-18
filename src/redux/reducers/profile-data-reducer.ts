import {ActionType,} from "../store";
import {AppThunk} from "../redux-store";
import {apiProfileComp} from "../../api/api-profile";
import {AxiosError} from "axios";

const ADD_POST = 'social-network/profileData/ADD-POST';
const SET_USER_PROFILE = 'social-network/profileData/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profileData/SET_USER_STATUS';
const DELETE_POST = 'social-network/profileData/DELETE_POST';


let initialState = {
    postData: [
        {id: '1', message: "Hi,guys, i'm still in Bryansk today!", likeCount: 2345},
        {id: '2', message: "Merry Christmas and Happy NY, everybody!", likeCount: 987}
    ],
    usersProfile: null as UsersProfilePropsType | null,
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
        case DELETE_POST:
            return {...state, postData: state.postData.filter(post => post.id !== action.postID)};
        case SET_USER_PROFILE:
            return {...state, usersProfile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

//action-creators
export const addPostAC = (postText: string) => ({type: ADD_POST, postText} as const);
export const setUserProfile = (profile: UsersProfilePropsType | null) => ({
    type: SET_USER_PROFILE,
    profile
} as const)
export const setUserStatus = (status: string) => ({
    type: SET_USER_STATUS,
    status
} as const)
export const updateUserStatus = (status: string) => ({
    type: SET_USER_STATUS,
    status
} as const)
export const deletePost = (postID: string) => ({type: DELETE_POST, postID} as const)

//thunk-creator
export const getUserProfileTC = (userID: number): AppThunk => async dispatch => {
    try {
        dispatch(setUserProfile(await apiProfileComp.getUserProfileData(userID)));
    } catch (err) {
        const error = err as AxiosError
        console.log(error)
    }
}

export const getUserStatusTC = (userID: number): AppThunk => async dispatch => {
    try {
        dispatch(setUserStatus(await apiProfileComp.getUserProfileStatus(userID)))
    } catch (err) {
        const error = err as AxiosError
        console.log(error)
    }

}

export const updateUserStatusTC = (newStatus: string): AppThunk => async dispatch => {
    try {
        await apiProfileComp.updateUserProfileStatus(newStatus);
        dispatch(setUserStatus(newStatus));
    } catch (err) {
        const error = err as AxiosError
        console.log(error)
    }
}


//types
export type ProfileDataType = typeof initialState
export type AddPostType = ReturnType<typeof addPostAC>
export type DeletePostType = ReturnType<typeof deletePost>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetUserStatusType = ReturnType<typeof setUserStatus>
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
};