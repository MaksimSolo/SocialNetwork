import React, {useState} from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/state";


type MyPostsType = {
    postData: Array<PostDataType>
}

export function MyPosts(props: MyPostsType) {

    let [likeCount, setLikeCount] = useState<number>(0)


    let postsItems = props.postData.map(post => <Post message={post.message}
                                                       id={post.id}
                                                       likeCount={likeCount}
                                                       setLikeCount={setLikeCount}/>)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>ADD</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsItems}
            </div>
        </div>
    );
};

