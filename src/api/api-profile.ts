import {instance} from "./config/config";


export const apiProfileComp = {
  getUserProfileData(userID: number) {
    return instance.get(`${userID}`).then(r => r.data)
  },
  getUserProfileStatus(userID: number) {
    return instance.get(`/status/${userID}`).then(r => r.data)
  },
  updateUserProfileStatus(status: string) {
    return instance.put(`/status`, {status}).then(r => r.data)
  }
}

