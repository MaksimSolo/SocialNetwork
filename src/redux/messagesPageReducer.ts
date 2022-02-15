import {ActionType, MessagesPageType} from "./store";


const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


export type SendMessageType = {
    type: typeof SEND_MESSAGE
    textToSendMessage: string
}
export type UpdateMessageTextType = {
    type: typeof UPDATE_MESSAGE_TEXT
    newTextToMessage: string
}

let initialState = {
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
}


export const messagesPageReducer = (state: MessagesPageType = initialState, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            state.messagesData.push({
                id: JSON.stringify(new Date().getTime()),
                text: action.textToSendMessage
            });
            state.textToSendMessage = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.textToSendMessage = action.newTextToMessage;
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = (textToSendMessage: string): SendMessageType => ({type: SEND_MESSAGE, textToSendMessage})
export const updateMessageTextAC = (newTextToMessage: string): UpdateMessageTextType => ({
    type: UPDATE_MESSAGE_TEXT,
    newTextToMessage
})