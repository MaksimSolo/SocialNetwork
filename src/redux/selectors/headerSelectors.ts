import {AppStateType} from "../redux-store";
import {createSelector} from "reselect";
import {UsersType} from "../reducers/usersDataReducer";
import {AuthDataType} from "../reducers/authReducer";

//в селекторах можно производить отдельные нужные действия с элемeнтами стейта!

//simple selectors (without complex logic)
const getAuthData = (state: AppStateType) => state.auth.data;
const getAuthInProgress = (state: AppStateType) => state.auth.inProgress;
const getIsAuth = (state: AppStateType) => state.auth.isAuth;

//main selectors (there must be complex logic here)
export const getAuthDataMS = createSelector(getAuthData, (data: AuthDataType) => data);
export const getAuthInProgressMS = createSelector(getAuthInProgress, (inProgress: boolean) => inProgress);
export const getIsAuthMS = createSelector(getIsAuth, (isAuth: boolean) => isAuth);
