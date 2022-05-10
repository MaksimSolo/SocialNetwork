import axios from "axios";

export const apiUsersInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'e8f5aac1-49b6-4991-ad14-5794e579a911'
    }
})

export const apiUsersComp = {
    getUsersData(currentPage: number, pageSize: number) {
        return apiUsersInstance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
    },
    unfollowUser(id: number) {
        return apiUsersInstance.delete(`follow/${id}`,).then(response => response.data)
    },
    postForFollowUser(id: number) {
        return apiUsersInstance.post(`follow/${id}`,).then(response => response.data)
    }
}



