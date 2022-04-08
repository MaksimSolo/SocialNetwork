import axios from "axios";


export const getUserData = (userID: number) =>
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`, {withCredentials: true})
