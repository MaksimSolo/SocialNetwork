import React from 'react';
import {UsersType} from "../../redux/usersDataReducer";
import axios from "axios";
import userPhoto from "../../images/userr.png";
import style from "./Users.module.css";
import {AppStateType} from "../../redux/redux-store";


type UsersPropType = {
    users: Array<UsersType>
    totalUsersCount: number,
    pageSize: number
    currentPage: number
    toggleFollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    changeCurrentPage: (newPage: number) => void
    setUsersTotalCount: (totalUsersCount: number) => void
}

export class Users extends React.Component<UsersPropType, AppStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount)
            }
        );
    }

    onChangingCurrentPage = (newPage: number) => {
        this.props.changeCurrentPage(newPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                        }
        );
    }

    render = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pagesNumbers = [];
        for (let i = 1; i <= pagesCount; i++) {
            pagesNumbers.push(i)
        }
        return <div>
            <div>
                {pagesNumbers.map(p => {
                        return <span className={this.props.currentPage === p ? style.selectedPage : ''}
                                     onClick={(e) => this.onChangingCurrentPage(p)}>..{p}</span>
                    }
                )}
            </div>
            {
                this.props.users.map(u =>
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
                        this.props.toggleFollow(u.id)
                    }}>Unfollow</button> :
                    <button onClick={() => {
                        this.props.toggleFollow(u.id)
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
    }

}

