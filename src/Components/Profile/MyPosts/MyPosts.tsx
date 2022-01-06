import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export function MyPosts() {
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
                <Post message="Hi,guys, i'm still in Bryansk today!"/>
                <Post message="Merry Christmas and Happy NY, everybody!"/>
            </div>
        </div>
    );
};

