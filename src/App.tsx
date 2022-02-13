import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {StateType, store, StoreType} from "./redux/state";


export type AppProps = {
    store: StoreType
    state: StateType
}

export function App(props: AppProps) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friendsData={props.state.friendsSideBar.friendsData}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile postData={props.state.profileData.postData}
                                                             dispatch={props.store.dispatch.bind(store)}
                                                             newPostText={props.state.profileData.newPostText}/>}/>
                    <Route path='/dialogs'
                           element={<Dialogs messageData={props.state.messagesPage.messagesData}
                                             dialogsData={props.state.messagesPage.dialogsData}
                                             textToSendMessage={props.state.messagesPage.textToSendMessage}
                                             dispatch={props.store.dispatch.bind(store)}/>}/>
                    {/*<Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}


