import React from 'react';
import {StoreType,} from "../../redux/store";
import {sendMessageAC, updateMessageTextAC} from "../../redux/messagesPageReducer";
import {Dialogs} from "./Dialogs";


export type DialogsContainerType = {
    store: StoreType

}

export const DialogsContainer = (props: DialogsContainerType) => {

    const state = props.store.getState().messagesPage;

    const sendMessageByButtonADD = () => {
        props.store.dispatch(sendMessageAC(state.textToSendMessage))
    }
    const updateMessageText = (newTextToMessage: string) => {
        props.store.dispatch(updateMessageTextAC(newTextToMessage))
    }


    return (
        <Dialogs messagesPage={state}
                 sendMessageByButtonADD={sendMessageByButtonADD}
                 updateMessageText={updateMessageText}
        />
    );
};

