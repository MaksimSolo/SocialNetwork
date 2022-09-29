import {applyMiddleware, combineReducers, createStore,} from "redux";
import {profileDataReducer} from "./reducers/profileDataReducer";
import {messagesPageReducer} from "./reducers/messagesPageReducer";
import {friendsSideBarReducer} from "./reducers/friendsSideBarReducer";
import {usersDataReducer} from "./reducers/usersDataReducer";
import {authReducer} from "./reducers/authReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form'
import {appInitReducer} from "./reducers/appInitReducer";
import {ActionType} from "./store";

const reducers = combineReducers({
    profileData: profileDataReducer,
    messagesPage: messagesPageReducer,
    friendsSideBar: friendsSideBarReducer,
    usersData: usersDataReducer,
    auth: authReducer,
    form: formReducer,
    app: appInitReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

//types
type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;
type AppActionsType = ActionType | FormAction;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>

(window as any).store = store;




