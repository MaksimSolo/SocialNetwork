import {ActionType} from "../store";
import {AppThunk} from "../redux-store";
import {getAuthUserDataTC} from "./authReducer";
import {AxiosError} from "axios";

const INITIALIZED = 'social-network/appInit/INITIALIZED';

let initialState = {initialized: false}

export const appInitReducer = (state: AppInitType = initialState, action: ActionType): AppInitType => {

    switch (action.type) {
        case INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;
    }
}

//action-creator
export const initializedAC = () => ({type: INITIALIZED,} as const);


//thunk-creator
export const initializeApp = (): AppThunk =>
    async dispatch => {
        try {
            await dispatch(getAuthUserDataTC());
            dispatch(initializedAC());
        } catch (err) {
            const error = err as AxiosError
            console.log(error)
        }
    }

//types
export type Initialized = ReturnType<typeof initializedAC>
export type AppInitType = typeof initialState;

