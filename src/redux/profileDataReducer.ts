import {ActionType, ProfileDataType,} from "./store";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {getUserData} from "../api/api-profile";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type AddPostType = {
    type: typeof ADD_POST
    // newPostText: string
}
export type UpdatePostTextType = {
    type: typeof UPDATE_POST_TEXT
    newText: string
}

export type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: UsersProfilePropsType | null,
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

let initialState: ProfileDataType = {
    postData: [
        {id: '1', message: "Hi,guys, i'm still in Bryansk today!", likeCount: 2345},
        {id: '2', message: "Merry Christmas and Happy NY, everybody!", likeCount: 987}
    ],
    newPostText: '',
    usersProfile: null,
}


export const profileDataReducer = (state: ProfileDataType = initialState, action: ActionType): ProfileDataType => {
    switch (action.type) {
        case ADD_POST:
            let textToPost = state.newPostText;
            return {
                ...state, postData: [...state.postData, {
                    id: JSON.stringify(new Date().getTime()),
                    message: textToPost,
                    likeCount: 0
                }],
                newPostText: '',
            };
        case UPDATE_POST_TEXT:
            return {
                ...state, newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state, usersProfile: action.profile
            }
        default:
            return state;
    }
}

export const addPostAC = (): AddPostType => ({type: ADD_POST});
export const updatePostTextAC = (newText: string): UpdatePostTextType => ({type: UPDATE_POST_TEXT, newText})
export const setUserProfile = (profile: UsersProfilePropsType | null): SetUserProfileType => ({
    type: SET_USER_PROFILE,
    profile
})

export const setUserProfileTC = (userID:number): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {
        getUserData (userID).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}