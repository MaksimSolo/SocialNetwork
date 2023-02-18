import {instance} from "./config/config";

export const apiUsers = {
  getUsersData(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
  },
  unfollowUser(id: number) {
    return instance.delete<ToggleFollowResponseType>(`follow/${id}`,).then(resp => resp.data)
  },
  postForFollowUser(id: number) {
    return instance.post<ToggleFollowResponseType>(`follow/${id}`,).then(resp => resp.data)
  }
}


//types
export type ToggleFollowResponseType<T = {}> = {
  resultCode: number
  messages: string[],
  data: T
}



