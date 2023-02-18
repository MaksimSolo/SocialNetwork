import React, {useMemo} from 'react';
import {UsersType} from "../../redux/reducers/users-data-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";


type UsersPropType = {
    users: Array<UsersType>
    totalUsersCount: number,
    pageSize: number
    currentPage: number
    onChangingCurrentPage: (newPage: number) => void
    toggleFollowFetchingQueue: number[]
    unfollowUser: (userID: number) => void
    followUser: (userID: number) => void
}

export const Users: React.FC<UsersPropType> = (
    {
        currentPage,
        onChangingCurrentPage,
        pageSize,
        totalUsersCount,
        users,
        ...props
    }
) => {
    const usersForRender = useMemo(() => users.map(u => <User key={u.id} user={u} {...props}/>)
    , [users, props])

    return (
        <div>
            <Paginator currentPage={currentPage} onChangingCurrentPage={onChangingCurrentPage} pageSize={pageSize}
                       totalUsersCount={totalUsersCount}/>
            {usersForRender}
        </div>
    )
};
