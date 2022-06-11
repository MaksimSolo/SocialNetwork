import {ActionType} from "./store";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {apiAuth} from "../api/api-auth";
import {fetchingInProgress} from "./usersDataReducer";
import {FormDataType} from "../Components/Login/Login";

const APPLY_AUTH_DATA = 'APPLY_AUTH_DATA';
const TOGGLE_INPROGRESS = 'TOGGLE_INPROGRESS';


export type toggleInProgressType = {
    type: typeof TOGGLE_INPROGRESS
    inProgress: boolean
}
export type applyAuthDataType = {
    type: typeof APPLY_AUTH_DATA
    data: AuthDataType
    isAuth: boolean
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
            return {...state, ...action.data, isAuth: action.isAuth}
        case TOGGLE_INPROGRESS:
            return {...state, inProgress: action.inProgress}
        default:
            return state;
    }
}
//action-creators
export const applyAuthData = (data: AuthDataType, isAuth: boolean): applyAuthDataType => ({
    type: APPLY_AUTH_DATA,
    data,
    isAuth
})


//thunk-creators
export const getAuthUserDataTC = (): ThunkAction<void, AppStateType, unknown, ActionType> => {

    return (dispatch) => {
        dispatch(fetchingInProgress(true));
        apiAuth.getAuthData().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(applyAuthData(response.data, true));
            }
            dispatch(fetchingInProgress(false));
        });
    }
}
export const loginUserTC = (formData: FormDataType): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
    apiAuth.loginUser(formData).then(resp => {
        if (resp.resultCode === 0) {
                       dispatch(getAuthUserDataTC());
        }
    })
}
export const logoutUserTC = (): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
    apiAuth.logoutUser().then(resp => {
        if (resp.resultCode === 0) {
            debugger
            dispatch(applyAuthData({id: 0, email: '', login: ''}, false))
        }
    })
}



