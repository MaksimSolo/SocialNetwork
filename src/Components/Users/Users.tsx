import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../images/userr.png";
import {UsersType} from "../../redux/usersDataReducer";
import Preloader from "../Preloader/Preloader";


type UsersPropType = {
    users: Array<UsersType>
    totalUsersCount: number,
    pageSize: number
    currentPage: number
    toggleFollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    changeCurrentPage: (newPage: number) => void
    setUsersTotalCount: (totalUsersCount: number) => void
    onChangingCurrentPage: (newPage: number) => void
    inProgress: boolean
}

export const Users = (props: UsersPropType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pagesNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNumbers.push(i)
    }
    return (
        <div>
            <div>
                {pagesNumbers.map(p => {
                        return <span className={props.currentPage === p ? style.selectedPage : ''}
                                     onClick={(e) => props.onChangingCurrentPage(p)}>..{p}</span>
                    }
                )}
                <Preloader inProgress={props.inProgress}/>
            </div>
            {
                props.users.map(u =>
                        <div key={u.id}>
                    <span>
                    <div>
                    <img
                        src={u.photos.small ? u.photos.small : userPhoto}
                        alt={userPhoto}
                        className={style.usersPhoto}/>
                    </div>
                    <div>
                {u.followed ? <button onClick={() => {
                        props.toggleFollow(u.id)
                    }}>Unfollow</button> :
                    <button onClick={() => {
                        props.toggleFollow(u.id)
                    }}>Follow</button>}
                    </div>
                    </span>
                            <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                    </span>
                    </span>
                        </div>
                )
            }
        </div>
    )
};
