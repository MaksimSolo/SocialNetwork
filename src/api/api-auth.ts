import axios from "axios";
import {FormDataType} from "../Components/Login/Login";

const apiAuthInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/auth`,
    withCredentials: true,
    headers: {'API-KEY': 'e8f5aac1-49b6-4991-ad14-5794e579a911'}
})


export const apiAuth = {
    getAuthData() {
        return apiAuthInstance.get(`/me`)
    },
    loginUser(formData: FormDataType) {
        return apiAuthInstance.post(`/login`, formData).then(r => r.data)
    },
    logoutUser() {
        return apiAuthInstance.delete(`/login`).then(r => r.data)
    }
}