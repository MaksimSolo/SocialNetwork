import {combineReducers, createStore, applyMiddleware} from "redux";
import {profileDataReducer} from "./profileDataReducer";
import {messagesPageReducer} from "./messagesPageReducer";
import {friendsSideBarReducer} from "./friendsSideBarReducer";
import {usersDataReducer} from "./usersDataReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";


type ReducersType= typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

let reducers = combineReducers({
    profileData: profileDataReducer,
    messagesPage: messagesPageReducer,
    friendsSideBar: friendsSideBarReducer,
    usersData: usersDataReducer,
    auth:authReducer
});
let store = createStore(reducers, applyMiddleware(thunk));

(window as any).store = store;

export default store;


