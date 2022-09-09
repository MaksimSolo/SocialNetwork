import {AppStateType} from "./redux-store";

export const getUsers=(state: AppStateType)=>state.usersData.users;
export const getTotalUsersCount=(state: AppStateType)=>state.usersData.totalUsersCount;
export const getPageSize=(state: AppStateType)=>state.usersData.pageSize;
export const getCurrentPage=(state: AppStateType)=>state.usersData.currentPage;
export const getInProgress=(state: AppStateType)=>state.usersData.inProgress;
export const getToggleFollowFetchingQueue=(state: AppStateType)=>state.usersData.toggleFollowFetchingQueue;

