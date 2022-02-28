import {AddPostType, profileDataReducer, UpdatePostTextType} from "./profileDataReducer";
import {messagesPageReducer, SendMessageType, UpdateMessageTextType} from "./messagesPageReducer";
import {AppStateType} from "./redux-store";
import {SetUsersType, ToggleFollowType} from "./usersDataReducer";

export type PostDataType = {
    id: string
    message: string
    likeCount: number
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: string
    text: string
}
export type FriendsDataType = {
    id: string
    name: string
    img: string
}
export type ProfileDataType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type MessagesPageType = {
    messagesData: Array<MessageDataType>
    dialogsData: Array<DialogsDataType>
    textToSendMessage: string
}
export type FriendsSideBarType = { friendsData: Array<FriendsDataType> }
/*export type StateType = {
    friendsSideBar: FriendsSideBarType
    messagesPage: MessagesPageType
    profileData: ProfileDataType
}*/
export type StoreType = {
    _rerenderEntireTree: () => void
    _state: AppStateType
    dispatch: (action: ActionType) => void
    subscribe: (observer: () => void) => void
    getState: () => AppStateType
}


export type ActionType =
    AddPostType
    | UpdatePostTextType
    | SendMessageType
    | UpdateMessageTextType
    | ToggleFollowType
    | SetUsersType

let store = {
    _rerenderEntireTree: function () {
    },
    _state: {
        friendsSideBar: {
            friendsData: [
                {
                    id: '1',
                    name: 'Aleksey',
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgR91HZCgbauSwSmi3VG05-UzK8mlA6Q2aQ&usqp=CAU"
                },
                {
                    id: '2',
                    name: 'Alyona',
                    img: 'https://image.shutterstock.com/image-photo/photo-positive-excited-people-man-260nw-1146012125.jpg'
                },
                {
                    id: '3',
                    name: 'Ivan',
                    img: 'https://png.pngitem.com/pimgs/s/163-1635349_businessperson-illustration-happy-people-happy-business-people-clipart.png'
                }
            ]
        },
        messagesPage: {
            messagesData: [
                {id: '1', text: 'Hi! Did you want to meet me today?'},
                {id: '2', text: 'I have some lessons in the evening!'},
                {id: '3', text: 'Native JS is so fun and so important!'},
            ],
            textToSendMessage: '',
            dialogsData: [
                {id: '1', name: 'Miroslav'},
                {id: '2', name: 'Anna'},
                {id: '3', name: 'Kamilla'},
                {id: '4', name: 'Aleksey'},
                {id: '5', name: 'Alyona'},
                {id: '6', name: 'Ivan'}
            ]
        },
        profileData: {
            postData: [
                {id: '1', message: "Hi,guys, i'm still in Bryansk today!", likeCount: 2345},
                {id: '2', message: "Merry Christmas and Happy NY, everybody!", likeCount: 987}
            ],
            newPostText: '',
        }
    },

    subscribe: function (observer: () => void) {
        this._rerenderEntireTree = observer;
    },
    getState: function () {
        return this._state
    },
    dispatch(action: ActionType) {
        profileDataReducer(this._state.profileData, action);
        messagesPageReducer(this._state.messagesPage, action)
        this._rerenderEntireTree();
    }
}

