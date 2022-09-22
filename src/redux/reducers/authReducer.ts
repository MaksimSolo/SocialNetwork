import {ActionType} from "../store";
import {AppThunk} from "../redux-store";
import {apiAuth} from "../../api/api-auth";
import {fetchingInProgress} from "./usersDataReducer";
import {FormDataType} from "../../Components/Login/Login";
import {stopSubmit} from "redux-form";
import {AxiosError} from "axios";
import {setUserProfile, setUserStatus} from "./profileDataReducer";

const APPLY_AUTH_DATA = 'social-network/auth/APPLY_AUTH_DATA';
const TOGGLE_INPROGRESS = 'social-network/usersData/TOGGLE_INPROGRESS';


let initialState = {
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
            return {...state, data: action.data, isAuth: action.isAuth}
        case TOGGLE_INPROGRESS:
            return {...state, inProgress: action.inProgress}
        default:
            return state;
    }
}


//action-creators
export const applyAuthData = (data: AuthDataType, isAuth: boolean) => ({
    type: APPLY_AUTH_DATA,
    data,
    isAuth
} as const)

//thunk-creators
export const getAuthUserDataTC = (): AppThunk => async dispatch => {
    try {
        dispatch(fetchingInProgress(true));
        const response = await apiAuth.getAuthData();
        if (response.data.resultCode === 0) {
            dispatch(applyAuthData(response.data.data, true));
        }
        dispatch(fetchingInProgress(false));
    } catch (err) {
        const error = err as AxiosError
        console.log(error)
    }
}

export const loginUserTC = (formData: FormDataType): AppThunk => async dispatch => {
    try {
        const response = await apiAuth.loginUser(formData);
        if (response.resultCode === 0) {
            dispatch(getAuthUserDataTC());
        } else {
            let errorMessage = response.messages.length > 0 ? response.messages[0] : 'some unspecified error';
            dispatch(stopSubmit('Login', {_error: errorMessage})); //это инструмент редакс форм, для того чтобы сообщить в UI что необходимо НЕ САБМИТИТЬ!
        }
    } catch (err) {
        const error = err as AxiosError
        console.log(error)
    }
}


export const logoutUserTC = (): AppThunk => async dispatch => {
    const response = await apiAuth.logoutUser();
    if (response.resultCode === 0) {
        dispatch(applyAuthData({id: 0, email: '', login: ''}, false))
        dispatch(setUserProfile(null))
        dispatch(setUserStatus(''))
    }
}

//types
export type applyAuthDataType = ReturnType<typeof applyAuthData>
export type AuthDataType = {
    id: number,
    email: string,
    login: string,
}
export type AuthType = typeof initialState

