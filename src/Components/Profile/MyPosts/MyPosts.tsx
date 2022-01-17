import React, {ChangeEvent, useRef, useState} from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/state";


type MyPostsType = {
    postData: Array<PostDataType>
    addPost: () => void
    updatePostText: (text: string) => void
    newPostText: string
}

export function MyPosts(props: MyPostsType) {

    let [likeCount, setLikeCount] = useState<number>(0)
    let textRef = useRef<HTMLTextAreaElement>(null)


    let addPostByButtonAdd = () => {
        debugger
        props.addPost()
    }

    const updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let newText = textRef.current  as HTMLTextAreaElement
        props.updatePostText(newText.value)
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
                    <textarea ref={textRef}
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

