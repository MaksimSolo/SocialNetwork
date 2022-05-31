import React, {ChangeEvent,} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType,} from "../../redux/store";
import {Navigate} from 'react-router-dom';


export type DialogsType = {
    isAuth: boolean
    messagesPage: MessagesPageType
    sendMessageByButtonADD: () => void
    updateMessageText: (newTextToMessage: string) => void
}

export const Dialogs = (props: DialogsType) => {

    const sendMessageByButtonADD = () => {
        props.sendMessageByButtonADD()
    }
    const updateMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newTextToMessage = e.currentTarget.value;
        props.updateMessageText(newTextToMessage)
    }

    const dialogItems = props.messagesPage.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                                 id={dialog.id}/>);
    const messagesItems = props.messagesPage.messagesData.map(mess => <Message key={mess.id} text={mess.text}
                                                                               id={mess.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogItems}
            </div>
            <div className={classes.messages}>
                {messagesItems}
                <textarea value={props.messagesPage.textToSendMessage}
                          onChange={updateMessageText}/>
                <div>
                    <button onClick={sendMessageByButtonADD}>ADD</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};


