import {applyMiddleware, combineReducers, createStore,} from "redux";
import {profileDataReducer} from "./profileDataReducer";
import {messagesPageReducer} from "./messagesPageReducer";
import {friendsSideBarReducer} from "./friendsSideBarReducer";
import {usersDataReducer} from "./usersDataReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appInitReducer} from "./appInitReducer";


type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

let reducers = combineReducers({
    profileData: profileDataReducer,
    messagesPage: messagesPageReducer,
    friendsSideBar: friendsSideBarReducer,
    usersData: usersDataReducer,
    auth: authReducer,
    form: formReducer,
    app: appInitReducer,
});
let store = createStore(reducers, applyMiddleware(thunk));

(window as any).store = store;

export default store;


