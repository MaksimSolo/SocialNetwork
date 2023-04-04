import {
    selectFromToggleFollowFetchingQueue,
    toggleFollow,
    usersDataReducer,
    UsersDataType
} from "../reducers/users-data-reducer";

let currentState: UsersDataType;

beforeEach(() => {
    currentState = {
        users: [
            {
                name: 'string',
                id: 123,
                uniqueUrlName: 'string',
                photos: {
                    small: 'string',
                    large: 'string',
                },
                status: 'IM a student!',
                followed: false,

            },
            {
                name: 'maksim',
                id: 321,
                uniqueUrlName: 'maksim',
                photos: {
                    small: 'maksim',
                    large: 'maksim',
                },
                status: 'I am a freelancer',
                followed: true,

            },
        ],
        totalUsersCount: 50,
        pageSize: 100,
        currentPage: 10,
        pagesCountInPortion: 5,
        inProgress: false,
        toggleFollowFetchingQueue: [5152,321],
    }
})

test('following user correct', () => {
    let userID = 123
    let action = toggleFollow(userID)
    const newState = usersDataReducer(currentState, action)
    expect(newState.users[0].followed).toBe(true)
})

test('unfollowing user correctly', () => {
    let userID = 321
    let action = toggleFollow(userID)
    const newState = usersDataReducer(currentState, action)
    expect(newState.users[1].followed).toBe(false)
})

test('Queuing of correct user success', ()=>{
    let userID = 123
    let action = selectFromToggleFollowFetchingQueue(userID,true)
    const newState = usersDataReducer(currentState, action)
    expect(newState.toggleFollowFetchingQueue.length).toBe(3)
    expect(newState.toggleFollowFetchingQueue[2]).toEqual(userID)
})

test('getting correct user out of the queue success', ()=>{
    let userID = 321
    let action = selectFromToggleFollowFetchingQueue(userID,false)
    const newState = usersDataReducer(currentState, action)
    expect(newState.toggleFollowFetchingQueue.length).toBe(1)
    expect(newState.toggleFollowFetchingQueue[0]).toEqual(5152)
})