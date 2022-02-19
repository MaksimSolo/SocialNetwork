import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, updatePostTextAC} from "../../../redux/profileDataReducer";
import {MyPosts} from "./MyPosts";


type MyPostsContainerType = {
    store: StoreType
}

export function MyPostsContainer(props: MyPostsContainerType) {

    const state = props.store.getState().profileData;

    let addPost = () => {
        props.store.dispatch(addPostAC(state.newPostText))
    }

    let updatePostText = (newText: string) => {
        props.store.dispatch(updatePostTextAC(newText))
    }

    return (
        <MyPosts profileData ={state}
                 addPost={addPost}
                 updatePostText={updatePostText}
        />
    );
}

