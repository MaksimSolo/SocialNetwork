import axios from "axios";


export const getAuthData = () =>
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
