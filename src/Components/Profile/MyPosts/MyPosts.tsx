import React, {ChangeEvent, useRef, useState} from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionType, addPostAC, PostDataType, updatePostTextAC} from "../../../redux/state";


type MyPostsType = {
    postData: Array<PostDataType>
    dispatch: (action: ActionType) => void
    newPostText: string
}

export function MyPosts(props: MyPostsType) {

    let [likeCount, setLikeCount] = useState<number>(0)


    let addPostByButtonAdd = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    let updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.dispatch(updatePostTextAC(newText))
    }

    let postsItems = props.postData.map(post => <Post message={post.message}
                                                      id={post.id}
                                                      likeCount={likeCount}
                                                      setLikeCount={setLikeCount}/>)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                              value={props.newPostText}
                              onChange={updatePostText}/>
                </div>
                <div>
                    <button onClick={addPostByButtonAdd}>ADD</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsItems}
            </div>
        </div>
    );
};

