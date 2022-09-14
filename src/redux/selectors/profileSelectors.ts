import {AppStateType} from "../redux-store";
import {createSelector} from "reselect";
import {UsersProfilePropsType} from "../reducers/profileDataReducer";

//в селекторах можно производить отдельные нужные действия с элемeнтами стейта!

//simple selectors (without complex logic)
const getProfileData = (state: AppStateType) => state.profileData.usersProfile;
const getAuthUserId = (state: AppStateType) => state.auth.data.id;
const getProfileStatus = (state: AppStateType) => state.profileData.status;

//main selectors (there must be complex logic here)
export const getProfileDataMS = createSelector(getProfileData, (usersProfile: UsersProfilePropsType | null) => usersProfile);
export const getAuthUserIdMS = createSelector(getAuthUserId, (id: number) => id);
export const getProfileStatusMS = createSelector(getProfileStatus, (status: string) => status);
