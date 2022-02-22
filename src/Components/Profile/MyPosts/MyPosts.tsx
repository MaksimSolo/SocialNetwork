import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfileDataType} from "../../../redux/store";


type MyPostsType = {
    profileData: ProfileDataType
    addPost: () => void
    updatePostText: (newText: string) => void
}

export function MyPosts(props: MyPostsType) {

    let addPostByButtonAdd = () => {
        props.addPost();
    }

    let updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText: string = e.currentTarget.value;
        props.updatePostText(newText);
    }

    let postsItems = props.profileData.postData.map(post =>
        <Post
            key={post.id}
            message={post.message}
            id={post.id}
            likeCount={post.likeCount}
        />)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.profileData.newPostText}
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

