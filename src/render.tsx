import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {FriendsSideBarType, MessagesPageType, ProfileDataType, StateType} from "./redux/state";

export type rerenderProps = {
    friendsSideBar: FriendsSideBarType
    messagesPage: MessagesPageType
    profileData: ProfileDataType

}
export const rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}