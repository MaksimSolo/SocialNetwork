import {applyMiddleware, combineReducers, createStore,} from "redux";
import {profileDataReducer} from "./reducers/profileDataReducer";
import {messagesPageReducer} from "./reducers/messagesPageReducer";
import {friendsSideBarReducer} from "./reducers/friendsSideBarReducer";
import {usersDataReducer} from "./reducers/usersDataReducer";
import {authReducer} from "./reducers/authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appInitReducer} from "./reducers/appInitReducer";


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


