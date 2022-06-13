import {ActionType} from "./store";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {getAuthUserDataTC} from "./authReducer";

const INITIALIZED = 'INITIALIZED';

export type Initialized = {
    type: typeof INITIALIZED
}
export type AppInitType = {
    initialized: boolean
}

let initialState = {initialized: false}

export const appInitReducer = (state = initialState, action: ActionType): AppInitType => {

    switch (action.type) {
        case INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;
    }
}

//action-creator
export const initializedAC = (): Initialized => ({type: INITIALIZED,});


//thunk-creator
export const initializeApp = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> =>
    async dispatch => {
        try {
            await dispatch(getAuthUserDataTC());
            dispatch(initializedAC());
        } catch (e) {
            console.log(e)
        }
    }



