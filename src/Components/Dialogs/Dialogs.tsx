import React, {useRef} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessageDataType} from "../../redux/state";


export type DialogsType = {
    messageData: Array<MessageDataType>
    dialogsData: Array<DialogsDataType>
}

export const Dialogs = (props: DialogsType) => {

        const messageTextRef = useRef<HTMLTextAreaElement>(null)
        const sendMessageByButtonADD = ()=>{
            let textToMessage = messageTextRef.current as HTMLTextAreaElement
            alert(textToMessage.value)
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
                    <textarea ref={messageTextRef}></textarea>
                    <div>
                        <button onClick={sendMessageByButtonADD}>ADD</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
;

