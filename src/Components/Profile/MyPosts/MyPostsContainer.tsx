import React from 'react';
import {addPostAC, updatePostTextAC} from "../../../redux/profileDataReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from '../../../StoreContext';


type MyPostsContainerType = {
    // store: StoreType
}

export function MyPostsContainer(props: MyPostsContainerType) {


    return (
        <StoreContext.Consumer>
            {store => {

                const state = store.getState().profileData;

                let addPost = () => {
                    store.dispatch(addPostAC(state.newPostText))
                }

                let updatePostText = (newText: string) => {
                    store.dispatch(updatePostTextAC(newText))
                }

                return <MyPosts profileData={state}
                                addPost={addPost}
                                updatePostText={updatePostText}
                />
            }
            }
        </StoreContext.Consumer>
    );
}

