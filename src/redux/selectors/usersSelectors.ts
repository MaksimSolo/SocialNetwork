import {AppStateType} from "../redux-store";
import {createSelector} from "reselect";
import {UsersType} from "../reducers/users-data-reducer";

//в селекторах можно производить отдельные нужные действия с элемeнтами стейта!

//simple selectors (without complex logic)
const getUsersSimpleSelector = (state: AppStateType) => state.usersData.users;
const getTotalUsersCountSimpleSelector = (state: AppStateType) => state.usersData.totalUsersCount;
const getPageSize = (state: AppStateType) => state.usersData.pageSize;
const getCurrentPage = (state: AppStateType) => state.usersData.currentPage;
const getInProgress = (state: AppStateType) => state.usersData.inProgress;
const getToggleFollowFetchingQueue = (state: AppStateType) => state.usersData.toggleFollowFetchingQueue;
export const getPagesCountInPortion = (state: AppStateType) => state.usersData.pagesCountInPortion;

//main selectors (there must be complex logic here)
export const getUsersMainSelector = createSelector(getUsersSimpleSelector, (users: UsersType[]) => users);
export const getTotalUsersCountMainSelector = createSelector(getTotalUsersCountSimpleSelector, (totalUsersCount: number) => totalUsersCount);
export const getPageSizeMainSelector = createSelector(getPageSize, (pageSize: number) => pageSize);
export const getCurrentPageMainSelector = createSelector(getCurrentPage, (currentPage: number) => currentPage);
export const getInProgressMainSelector = createSelector(getInProgress, (inProgress: boolean) => inProgress);
export const getToggleFollowFetchingQueueMainSelector = createSelector(getToggleFollowFetchingQueue, (toggleFollowFetchingQueue: number[]) => toggleFollowFetchingQueue);

