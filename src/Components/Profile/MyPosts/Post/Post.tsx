import React from 'react';
import classes from './Post.module.css';

type PostType = {
    id: string
    message: string
    likeCount: number

}

export function Post(props: PostType) {


    return (
        <div className={classes.item}>
            <img
                src="https://w7.pngwing.com/pngs/42/801/png-transparent-creative-girls-avatar-art-girls-avatar-star-star-girl-avatar.png"/>
            {props.message}
            <div>
                <span >like</span> - {props.likeCount}
            </div>
        </div>
    );
};


