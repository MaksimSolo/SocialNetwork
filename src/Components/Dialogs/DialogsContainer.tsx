import React from 'react';
import {sendMessageAC, updateMessageTextAC} from "../../redux/messagesPageReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";



export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().messagesPage;
                const sendMessageByButtonADD = () => {
                    store.dispatch(sendMessageAC(state.textToSendMessage))
                }
                const updateMessageText = (newTextToMessage: string) => {
                    store.dispatch(updateMessageTextAC(newTextToMessage))
                }
                return <Dialogs messagesPage={state}
                                sendMessageByButtonADD={sendMessageByButtonADD}
                                updateMessageText={updateMessageText}/>
            }
            }
        </StoreContext.Consumer>
    );
};

