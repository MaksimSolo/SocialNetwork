import axios from "axios";
import {FormDataType} from "../Components/Login/Login";

const apiAuthInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/auth`,
    withCredentials: true,
    headers: {'API-KEY': 'b42e249f-81b0-486e-a39f-c56668ce792c'}
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