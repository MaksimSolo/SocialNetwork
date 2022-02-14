import {ActionType, MessagesPageType} from "./state";


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


export const messagesPageReducer = (state: MessagesPageType, action: ActionType): MessagesPageType => {
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