import React from 'react';
import classes from './Post.module.css';

type PostType = {
    id: string
    message: string
    likeCount: number
    setLikeCount: (likeCount: number) => void
}

export function Post(props: PostType) {


    const countLikes = () => {
        const likes = props.likeCount + 1;
        props.setLikeCount(likes)
    }
    return (
        <div className={classes.item}>
            <img
                src="https://w7.pngwing.com/pngs/42/801/png-transparent-creative-girls-avatar-art-girls-avatar-star-star-girl-avatar.png"/>
            {props.message}
            <div>
                <span onClick={countLikes}>like</span> - {props.likeCount}
            </div>
        </div>
    );
};


