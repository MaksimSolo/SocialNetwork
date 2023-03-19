import {FormDataType} from "../Components/Login/Login";
import {instance} from "./config/config";


export const apiAuth = {
  getAuthData() {
    return instance.get(`/auth/me`)
  },
  loginUser(formData: FormDataType) {
    return instance.post(`/auth/login`, formData).then(r => r.data)
  },
  logoutUser() {
    return instance.post(`/auth/logout`).then(r => r.data)
  }
}