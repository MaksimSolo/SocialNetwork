import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export function MyPosts () {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>ADD</button>
                <button>Delete</button>
            </div>
            <div className={classes.posts}>
                <Post message = "Hi,guys, i'm still in Bryansk today!"/>
                <Post message = "Merry Christmas and Happy NY, everybody!"/>
            </div>
        </div>
    );
};

