import classes from "../Dialogs.module.css";
import React from "react";

type MessageType = {
    id: string
    text: string
}
export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )
}