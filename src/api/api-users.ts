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
        return apiUsersInstance.get(`users?page=${currentPage}&count=${pageSize}`,)
    },
    unfollowUser(id: number) {
        return apiUsersInstance.delete<ToggleFollowResponseType>(`follow/${id}`,).then(resp=>resp.data)
    },
    postForFollowUser(id: number) {
        return apiUsersInstance.post<ToggleFollowResponseType>(`follow/${id}`,).then(resp=>resp.data)
    }
}


//types
export type ToggleFollowResponseType<T = {}> = {
    resultCode: number
    messages: string[],
    data: T
}



