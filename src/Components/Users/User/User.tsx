import React from 'react';
import style from '../Users.module.css';
import userPhoto from '../../../images/userr.png';
import {UsersType} from '../../../redux/reducers/users-data-reducer';
import {NavLink} from "react-router-dom";


type UserPropsType = {
    user: UsersType
    toggleFollowFetchingQueue: number[]
    unfollowUser: (userID: number) => void
    followUser: (userID: number) => void
}

export const User: React.FC<UserPropsType> = (
    {
        user,
        toggleFollowFetchingQueue,
        unfollowUser,
        followUser,
    }
) => {


    return <div>
        <span>
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : userPhoto}
                         alt={userPhoto}
                         className={style.usersPhoto}/>
                </NavLink>
            </div>
            <div>
                {user.followed ?
                    <button disabled={toggleFollowFetchingQueue.some(id => id === user.id)}
                            onClick={() => {
                                unfollowUser(user.id)
                            }}>Unfollow</button>
                    : <button disabled={toggleFollowFetchingQueue.some(id => id === user.id)}
                              onClick={() => {
                                  followUser(user.id)
                              }}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>user ID: {user.id}</div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
        </span>
    </div>
}


