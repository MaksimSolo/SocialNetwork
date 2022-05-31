import {sendMessageAC, updateMessageTextAC} from "../../redux/messagesPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {withAuthRedirectComponent} from "../../highOrderComp/withAuthRedirectComponent";


const mapStateToProps = (state: AppStateType) => ({
    messagesPage: state.messagesPage,
   })
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {

        sendMessageByButtonADD: () => {
            dispatch(sendMessageAC())
        },
        updateMessageText: (newTextToMessage: string) => {
            dispatch(updateMessageTextAC(newTextToMessage))
        }
    }
};

export const DialogsContainer = withAuthRedirectComponent(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

