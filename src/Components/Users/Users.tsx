import React from 'react';
import {UsersType} from "../../redux/usersDataReducer";
import style from './Users.module.css'

type UsersPropType = {
    users: Array<UsersType>
    toggleFollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
}
export const Users = (props: UsersPropType) => {
    console.log('USERS')

    if (props.users.length ===0) {
        props.setUsers([
                {
                    id: '1',
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1C2FrebT4DbIExkejoMYfuE92NJBQsDjBg&usqp=CAU',
                    followed: true,
                    fullName: 'Maksim',
                    status: "Hi everybody, i'm student",
                    location: {city: 'Bryansk', country: 'Russia'}
                },
                {
                    id: '2',
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1C2FrebT4DbIExkejoMYfuE92NJBQsDjBg&usqp=CAU',
                    followed: false,
                    fullName: 'Anna',
                    status: 'Stop War!',
                    location: {city: 'Antonovka', country: 'Russia'}
                },
                {
                    id: '3',
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1C2FrebT4DbIExkejoMYfuE92NJBQsDjBg&usqp=CAU',
                    followed: true,
                    fullName: 'Hasbulla',
                    status: 'Believe in Jesus',
                    location: {city: 'Amman', country: 'Jordan'}
                },
            ],
        )
    }
    return (
        <div>
            {props.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1C2FrebT4DbIExkejoMYfuE92NJBQsDjBg&usqp=CAU"
                            alt=""
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
                         <div>{u.fullName}</div>
                         <div>{u.status}</div>
                     </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>
            )}
        </div>
    )
};

