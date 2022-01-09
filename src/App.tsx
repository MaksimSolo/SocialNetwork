import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {dialogsDataType, messageDataType, postDataType} from "./index";


export type AppProps = {
    messageData?: Array<messageDataType>
    dialogsData?: Array<dialogsDataType>
    postData?: Array<postDataType>
}

export function App(props: AppProps) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile postData={props.postData}/>}/>
                    <Route path='/dialogs' element={<Dialogs messageData={props.messageData} dialogsData={props.dialogsData}/>}/>
                    {/*<Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}


