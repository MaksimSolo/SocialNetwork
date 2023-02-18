import {FormDataType} from "../Components/Login/Login";
import {instance} from "./config/config";


export const apiAuth = {
  getAuthData() {
    return instance.get(`/me`)
  },
  loginUser(formData: FormDataType) {
    return instance.post(`/login`, formData).then(r => r.data)
  },
  logoutUser() {
    return instance.delete(`/login`).then(r => r.data)
  }
}