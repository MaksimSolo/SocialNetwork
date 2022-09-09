import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UsersType} from "./usersDataReducer";


const getUsersSimpleSelector = (state: AppStateType) => state.usersData.users;
export const getUsersMainSelector = createSelector(getUsersSimpleSelector, (users: UsersType[]) => users);
export const getTotalUsersCount = (state: AppStateType) => state.usersData.totalUsersCount;
export const getPageSize = (state: AppStateType) => state.usersData.pageSize;
export const getCurrentPage = (state: AppStateType) => state.usersData.currentPage;
export const getInProgress = (state: AppStateType) => state.usersData.inProgress;
export const getToggleFollowFetchingQueue = (state: AppStateType) => state.usersData.toggleFollowFetchingQueue;

