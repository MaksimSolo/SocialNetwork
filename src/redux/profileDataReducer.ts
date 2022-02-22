import {ActionType, ProfileDataType,} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export type AddPostType = {
    type: typeof ADD_POST
    // newPostText: string
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
            let textToPost = state.newPostText;
            return {
                ...state, postData: [...state.postData, {
                    id: JSON.stringify(new Date().getTime()),
                    message: textToPost,
                    likeCount: 0}],
                newPostText: '',
            };
        case UPDATE_POST_TEXT:
            return {
                ...state, newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostAC = (): AddPostType => ({type: ADD_POST});
export const updatePostTextAC = (newText: string): UpdatePostTextType => ({type: UPDATE_POST_TEXT, newText})