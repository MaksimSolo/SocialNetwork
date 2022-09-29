import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {MessagesPageType} from "../../redux/reducers/messagesPageReducer";



export type DialogsType = {
    isAuth: boolean
    messagesPage: MessagesPageType
    sendMessageByButtonADD: (message: string) => void
}

export const Dialogs = (props: DialogsType) => {

    const dialogItems = props.messagesPage.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                                 id={dialog.id}/>);
    const messagesItems = props.messagesPage.messagesData.map(mess => <Message key={mess.id} text={mess.text}
                                                                               id={mess.id}/>);
    const addNewMessage = (formData: DialogsFormDataType) => {
        props.sendMessageByButtonADD(formData.message)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogItems}
            </div>
            <div className={classes.messages}>
                <DialogsReduxForm onSubmit={addNewMessage}/>
                {messagesItems}

            </div>
        </div>
    );
};

const maxLength50 = maxLengthCreator(50);
const DialogsForm: React.FC<InjectedFormProps<DialogsFormDataType>> = props => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'message'}
                   component={Textarea}
                   placeholder={'write whatever comes to mind'}
                   validate={[required, maxLength50,]}/>
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