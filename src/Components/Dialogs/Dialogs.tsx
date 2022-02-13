import React, {ChangeEvent, useRef} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, DialogsDataType, MessageDataType, sendMessageAC, updateMessageTextAC} from "../../redux/state";


export type DialogsType = {
    messageData: Array<MessageDataType>
    dialogsData: Array<DialogsDataType>
    textToSendMessage: string
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsType) => {


        const sendMessageByButtonADD = () => {
            props.dispatch(sendMessageAC(props.textToSendMessage))
        }
        const updateMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let newTextToMessage = e.currentTarget.value;
            props.dispatch(updateMessageTextAC(newTextToMessage))
        }

        const dialogItems = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
        const messagesItems = props.messageData.map(mess => <Message text={mess.text} id={mess.id}/>)

        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogItems}
                </div>
                <div className={classes.messages}>
                    {messagesItems}
                    <textarea value={props.textToSendMessage}
                              onChange={updateMessageText}/>
                    <div>
                        <button onClick={sendMessageByButtonADD}>ADD</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
;

