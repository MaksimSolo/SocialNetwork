import {ActionType, ProfileDataType,} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export type AddPostType = {
    type: typeof ADD_POST
    newPostText: string
}
export type UpdatePostTextType = {
    type: typeof UPDATE_POST_TEXT
    newText: string
}

export const profileDataReducer = (state: ProfileDataType, action: ActionType):ProfileDataType => {
    switch (action.type) {
        case ADD_POST:
            state.postData.push({
                id: JSON.stringify(new Date().getTime()),
                message: action.newPostText,
            })
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string): AddPostType => ({type: ADD_POST, newPostText});
export const updatePostTextAC = (newText: string): UpdatePostTextType => ({type: UPDATE_POST_TEXT, newText})