import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type MessageType = {
    text: string
}
type DialogItemType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemType) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}
                     className={({isActive}) => isActive ? classes.active : ''}>{props.name}</NavLink>
        </div>
    );
};
const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name='Miroslav' id='1'/>
                <DialogItem name='Anna' id='2'/>
                <DialogItem name='Kamilla' id='3'/>
                <DialogItem name='Aleksey' id='4'/>
                <DialogItem name='Alyona' id='5'/>
                <DialogItem name='Ivan' id='6'/>
            </div>
            <div className={classes.messages}>
                <Message text='Hi! Did you want to meet me today?'/>
                <Message text='I have some lessons in the evening!'/>
                <Message text='Native JS is so fun and so important!'/>
            </div>
        </div>
    );
};

