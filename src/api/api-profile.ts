import axios from "axios";


export const apiProfileInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/profile`,
    withCredentials: true,
    headers: {
        'API-KEY': 'b42e249f-81b0-486e-a39f-c56668ce792c'
    }
})


export const apiProfileComp = {
    getUserProfileData(userID: number) {
        return apiProfileInstance.get(`${userID}`).then(r => r.data)
    },
    getUserProfileStatus(userID: number) {
        return apiProfileInstance.get(`/status/${userID}`).then(r => r.data)
    },
    updateUserProfileStatus(status: string) {
        return apiProfileInstance.put(`/status`, {status}).then(r => r.data)
    }
}

