import axios from "axios";


export const apiProfileInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/profile`,
    withCredentials: true,
    headers: {
        'API-KEY': 'e8f5aac1-49b6-4991-ad14-5794e579a911'
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

