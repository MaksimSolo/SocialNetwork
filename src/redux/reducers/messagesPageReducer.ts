import {ActionType, MessagesPageType} from "../store";

const SEND_MESSAGE = 'SEND_MESSAGE';

export type SendMessageType = {
    type: typeof SEND_MESSAGE
    newTextToMessage: string
}

let initialState = {
    messagesData: [
        {id: '1', text: 'Hi! Did you want to meet me today?'},
        {id: '2', text: 'I have some lessons in the evening!'},
        {id: '3', text: 'Native JS is so fun and so important!'},
    ],
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
            return {
                ...state, messagesData: [...state.messagesData, {
                    id: JSON.stringify(new Date().getTime()),
                    text: action.newTextToMessage
                }],
            }
        default:
            return state;
    }
}

export const sendMessageAC = (newTextToMessage: string): SendMessageType => ({type: SEND_MESSAGE, newTextToMessage})
