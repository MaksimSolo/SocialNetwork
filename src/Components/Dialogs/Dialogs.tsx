import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType,} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type DialogsType = {
    isAuth: boolean
    messagesPage: MessagesPageType
    sendMessageByButtonADD: (message: string) => void
}

export const Dialogs = (props: DialogsType) => {

    const dialogItems = props.messagesPage.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                                 id={dialog.id}/>);
    const messagesItems = props.messagesPage.messagesData.map(mess => <Message key={mess.id} text={mess.text}
                                                                               id={mess.id}/>)
    const addNewMessage = (formData: DialogsFormDataType) => {
        props.sendMessageByButtonADD(formData.message)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogItems}
            </div>
            <div className={classes.messages}>
                {messagesItems}
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


const DialogsForm: React.FC<InjectedFormProps<DialogsFormDataType>> = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'message'}
                   component={'textarea'}
                   placeholder={'write whatever comes to mind'}/>
        </div>
        <div>
            <button>SEND</button>
        </div>
    </form>;
}

const DialogsReduxForm = reduxForm<DialogsFormDataType>({form: 'addDialogMessageForm',})(DialogsForm)

type DialogsFormDataType = {
    message: string
}