import {instance} from "./config/config";


export const apiProfileComp = {
  getUserProfileData(userID: number) {
    return instance.get(`/profile/${userID}`).then(r => r.data)
  },
  getUserProfileStatus(userID: number) {
    return instance.get(`/profile/status/${userID}`).then(r => r.data)
  },
  updateUserProfileStatus(status: string) {
    return instance.put(`/profile/status`, {status}).then(r => r.data)
  }
}

