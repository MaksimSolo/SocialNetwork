import axios from "axios";
import {FormDataType} from "../Components/Login/Login";

const apiAuthInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/auth`,
    withCredentials: true,

})


export const apiAuth = {
    getAuthData() {
        return apiAuthInstance.get(`/me`, {headers: {'API-KEY': 'e8f5aac1-49b6-4991-ad14-5794e579a911'}})
    },
    loginUser(formData: FormDataType) {
        return apiAuthInstance.post(`/login`, formData).then(r => r.data)
    },
    logoutUser() {
        return apiAuthInstance.delete(`/login`).then(r => r.data)
    }
}