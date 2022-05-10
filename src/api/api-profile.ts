import axios from "axios";


export const getUserProfileData = (userID: number) =>
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`, {withCredentials: true})
