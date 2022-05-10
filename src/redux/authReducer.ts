import {ActionType} from "./store";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {getAuthData} from "../api/api-header";
import {fetchingInProgress} from "./usersDataReducer";

const APPLY_AUTH_DATA = 'APPLY_AUTH_DATA';
const TOGGLE_INPROGRESS = 'TOGGLE_INPROGRESS';


export type toggleInProgressType = {
    type: typeof TOGGLE_INPROGRESS
    inProgress: boolean
}
export type applyAuthDataType = {
    type: typeof APPLY_AUTH_DATA
    data: AuthDataType
}

export type AuthDataType = {
    id: number,
    email: string,
    login: string,
}
export type AuthType = {
    data: AuthDataType
    inProgress: boolean,
    isAuth: boolean,
}


let initialState: AuthType = {
    data: {
        id: 0,
        email: '',
        login: '',
    },
    inProgress: false,
    isAuth: false,
}


export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case APPLY_AUTH_DATA:
            return {...state, ...action.data, isAuth: true}
        case TOGGLE_INPROGRESS:
            return {...state, inProgress: action.inProgress}
        default:
            return state;
    }
}

export const applyAuthData = (data: AuthDataType): applyAuthDataType => ({type: APPLY_AUTH_DATA, data})

export const getAuthUserDataTC = (): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {
        dispatch(fetchingInProgress(true));
        getAuthData().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(applyAuthData(response.data));
            }
            dispatch(fetchingInProgress(false));
        });
    }
}

