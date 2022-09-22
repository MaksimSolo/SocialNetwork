import {messagesPageReducer, MessagesPageType, sendMessageAC} from "../reducers/messagesPageReducer";

let currentState: MessagesPageType;

beforeEach(() => {
    currentState = {
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
})

test('new message should be sended and rendered on screen', () => {
    const newTextToMessage = 'Testing is joy!'
    let action = sendMessageAC(newTextToMessage)
    const newState = messagesPageReducer(currentState, action)
    expect(newState.messagesData[3]).toBeDefined()
    expect(newState.messagesData[4]).toBeUndefined()
    expect(newState.messagesData[3].id).toBeDefined()
    expect(newState.messagesData[3].text).toBe('Testing is joy!')
})
