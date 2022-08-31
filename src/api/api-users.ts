import axios from "axios";

export const apiUsersInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'b42e249f-81b0-486e-a39f-c56668ce792c'
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



