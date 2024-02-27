import {AppStateType} from "../redux-store";
import {createSelector} from "reselect";
import {UsersProfilePropsType} from "../reducers/profile-data-reducer";

//в селекторах можно производить отдельные нужные действия с элемeнтами стейта!

//simple selectors (without complex logic)
const selectUserProfile = (state: AppStateType) => state.profileData.usersProfile;
const selectAuthUserId = (state: AppStateType) => state.auth.data.id;
const selectProfileStatus = (state: AppStateType) => state.profileData.status;

//main selectors (complex logic must be here)
export const selectUserProfileDataMain = createSelector(selectUserProfile, (usersProfile: UsersProfilePropsType | null) => usersProfile);
export const selectAuthUserIdMain = createSelector(selectAuthUserId, (id: number) => id);
export const selectProfileStatusMain = createSelector(selectProfileStatus, (status: string) => status);
