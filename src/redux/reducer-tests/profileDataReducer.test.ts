import {addPostAC, deletePost, profileDataReducer, ProfileDataType} from "../reducers/profile-data-reducer";

let currentState: ProfileDataType;

beforeEach(() => {
    currentState = {
        postData: [
            {id: '1', message: "Hi,guys, i'm still in Bryansk today!", likeCount: 2345},
            {id: '2', message: "Merry Christmas and Happy NY, everybody!", likeCount: 987}
        ],
        usersProfile: null,
        status: '',
    }
})

test('post should be added correctly', () => {
    const postText = 'Hello september!'
    let action = addPostAC(postText)
    const newState = profileDataReducer(currentState, action)

    expect(newState.postData.length).toBeGreaterThan(2)
    expect(newState.postData[2].message).toStrictEqual('Hello september!')
    expect(newState.postData.map(el => el.id)).toBeDefined()
})

test('post should be deleted correctly', () => {
    const deletingID = '2'
    let action = deletePost(deletingID);
    const newState = profileDataReducer(currentState, action)

    expect(newState.postData.length).toBe(1)
    expect(newState.postData[1]).toBeUndefined()
})

