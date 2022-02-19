import {ActionType, ProfileDataType,} from "./store";

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

let initialState: ProfileDataType = {
    postData: [
        {id: '1', message: "Hi,guys, i'm still in Bryansk today!", likeCount: 2345},
        {id: '2', message: "Merry Christmas and Happy NY, everybody!", likeCount: 987}
    ],
    newPostText: '',
}


export const profileDataReducer = (state: ProfileDataType = initialState, action: ActionType): ProfileDataType => {
    switch (action.type) {
        case ADD_POST:
            state.postData.push({
                id: JSON.stringify(new Date().getTime()),
                message: action.newPostText,
                likeCount: 0,
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