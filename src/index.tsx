import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export type messageDataType = {id:string,text:string}
export type dialogsDataType = {id:string,name:string}
export type postDataType = {id:string,message:string}
const messageData = [
    {id: '1', text: 'Hi! Did you want to meet me today?'},
    {id: '2', text: 'I have some lessons in the evening!'},
    {id: '3', text: 'Native JS is so fun and so important!'},
]
const dialogsData = [
    {id: '1', name: 'Miroslav'},
    {id: '2', name: 'Anna'},
    {id: '3', name: 'Kamilla'},
    {id: '4', name: 'Aleksey'},
    {id: '5', name: 'Alyona'},
    {id: '6', name: 'Ivan'}
]
const postData = [
    {id: '1', message: "Hi,guys, i'm still in Bryansk today!"},
    {id: '2', message: "Merry Christmas and Happy NY, everybody!"}
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App messageData={messageData} dialogsData={dialogsData} postData={postData}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
