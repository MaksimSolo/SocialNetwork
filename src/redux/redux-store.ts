import {combineReducers, createStore} from "redux";
import {profileDataReducer} from "./profileDataReducer";
import {messagesPageReducer} from "./messagesPageReducer";
import {friendsSideBarReducer} from "./friendsSideBarReducer";


type ReducersType= typeof reducers;
export type AppStateType = ReturnType<ReducersType>;


export type AppStoreType = typeof store;

let reducers = combineReducers({
    profileData: profileDataReducer,
    messagesPage: messagesPageReducer,
    friendsSideBar: friendsSideBarReducer,
});
let store = createStore(reducers);


export default store;