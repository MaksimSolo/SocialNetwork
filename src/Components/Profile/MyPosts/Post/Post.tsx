import React, {useState} from 'react';
import classes from './Post.module.css';

export type PostType = {
    message: string
}

export function Post(props: PostType) {
    let [likeCount, setLikeCount] = useState<number>(0)

    const countLikes = () => {
        likeCount = likeCount + 1;
        setLikeCount(likeCount)
    }
    return (
        <div className={classes.item}>
            <img
                src="https://w7.pngwing.com/pngs/42/801/png-transparent-creative-girls-avatar-art-girls-avatar-star-star-girl-avatar.png"/>
            {props.message}
            <div>
                <span onClick={countLikes}>like</span> - {likeCount}
            </div>
        </div>
    );
};


