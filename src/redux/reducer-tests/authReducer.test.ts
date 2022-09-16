import {applyAuthData, AuthDataType, authReducer, AuthType} from "../reducers/authReducer";
import {fetchingInProgress} from "../reducers/usersDataReducer";

let currentState: AuthType;

beforeEach(() => {
    currentState = {
        data: {
            id: 0,
            email: '',
            login: '',
        },
        inProgress: false,
        isAuth: false,
    }
})

test('auth data should be applied to state object', () => {
    const data:AuthDataType = {
        id: 1651651651,
        email: 'dsdshdhshdshdh',
        login: 'userrrrrr',
    }
    let action = applyAuthData(data, true)
    const newState = authReducer(currentState, action)
    expect(newState.data.id&&newState.data.email&&newState.data.login).toBeDefined()
    expect(newState.data.id).not.toEqual(currentState.data.id)
    expect(newState.data.email).not.toEqual(currentState.data.email)
    expect(newState.data.login).not.toEqual(currentState.data.login)
})

test('status inProgress should be changed correctly', () => {
    let action = fetchingInProgress(true);
    const newState = authReducer(currentState, action)
    expect(newState.inProgress).not.toEqual(currentState.inProgress)
    expect(newState.inProgress).toBe(true)
})

