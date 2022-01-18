import './index.css'
import reportWebVitals from './reportWebVitals';
import {state, StateType, subscribe} from './redux/state'
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

/*type rerenderProps = {
 friendsSideBar: FriendsSideBarType
 messagesPage: MessagesPageType
 profileData: ProfileDataType

}*/
// type rerenderProps = {
//     state: StateType
// }
// const rerenderEntireTree = (state: StateType) => {
const rerenderEntireTree = () => {

 ReactDOM.render(
     <React.StrictMode>
      <BrowserRouter>
       <App state={state}/>
      </BrowserRouter>
     </React.StrictMode>,
     document.getElementById('root')
 );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
