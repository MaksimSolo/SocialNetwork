import {applyMiddleware, combineReducers, compose, createStore,} from "redux";
import {profileDataReducer} from "./reducers/profile-data-reducer";
import {messagesPageReducer} from "./reducers/messages-page-reducer";
import {friendsSidebarReducer} from "./reducers/friends-sidebar-reducer";
import {usersDataReducer} from "./reducers/users-data-reducer";
import {authReducer} from "./reducers/auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form'
import {appReducer} from "./reducers/app-reducer";
import {ActionType} from "./store";

const reducers = combineReducers({
    profileData: profileDataReducer,
    messagesPage: messagesPageReducer,
    friendsSideBar: friendsSidebarReducer,
    usersData: usersDataReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});


//composeEnhancers added for working with redux dev tools extension in Chrome browser
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

//types
type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;
type AppActionsType = ActionType | FormAction;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>

(window as any).__store__ = store;




