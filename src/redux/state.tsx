export type PostDataType = {
    id: string
    message: string
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
    textToSendMessage:string
}
export type FriendsSideBarType = { friendsData: Array<FriendsDataType> }
export type StateType = {
    friendsSideBar: FriendsSideBarType
    messagesPage: MessagesPageType
    profileData: ProfileDataType
}
export type StoreType = {
    _rerenderEntireTree: () => void
    _state: StateType
    dispatch: (action: ActionType) => void
    subscribe: (observer: () => void) => void
    getState: () => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


export type AddPostType = {
    type: typeof ADD_POST
    newPostText: string
}
export type UpdatePostTextType = {
    type: typeof UPDATE_POST_TEXT
    newText: string
}
export type SendMessageType = {
    type: typeof SEND_MESSAGE
    textToSendMessage: string
}
export type UpdateMessageTextType = {
    type: typeof UPDATE_MESSAGE_TEXT
    newTextToMessage: string
}


export type ActionType = AddPostType | UpdatePostTextType | SendMessageType | UpdateMessageTextType


export const addPostAC = (newPostText: string): AddPostType => ({type: ADD_POST, newPostText})
export const updatePostTextAC = (newText: string): UpdatePostTextType => ({type: UPDATE_POST_TEXT, newText})
export const sendMessageAC = (textToSendMessage: string): SendMessageType => ({type: SEND_MESSAGE, textToSendMessage})
export const updateMessageTextAC = (newTextToMessage: string): UpdateMessageTextType => ({
    type: UPDATE_MESSAGE_TEXT,
    newTextToMessage
})


export let store = {
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
                {id: '1', message: "Hi,guys, i'm still in Bryansk today!"},
                {id: '2', message: "Merry Christmas and Happy NY, everybody!"}
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
        switch (action.type) {
            case ADD_POST:
                this._state.profileData.postData.push({
                    id: JSON.stringify(new Date().getTime()),
                    message: action.newPostText
                })
                this._rerenderEntireTree()
                this._state.profileData.newPostText = ''
                break;
            case UPDATE_POST_TEXT:
                this._state.profileData.newPostText = action.newText;
                this._rerenderEntireTree()
                break;
            case SEND_MESSAGE:
                this._state.messagesPage.messagesData.push({
                    id: JSON.stringify(new Date().getTime()),
                    text: action.textToSendMessage
                });
                this._rerenderEntireTree();
                this._state.messagesPage.textToSendMessage = '';
                break;
            case UPDATE_MESSAGE_TEXT:
                this._state.messagesPage.textToSendMessage= action.newTextToMessage;
                this._rerenderEntireTree();
                break;
            default:
                throw new Error('invalid type');
        }
    }
}
