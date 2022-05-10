import {sendMessageAC, updateMessageTextAC} from "../../redux/messagesPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => ({
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth,
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

