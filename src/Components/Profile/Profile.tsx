import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={classes.profile}>
            <div>
                <img
                    src='https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg='/>
            </div>
            <div>
                Avatar + Description
            </div>
            <MyPosts/>
        </div>
    );
};

