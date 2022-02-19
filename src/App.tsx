import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import {AppStateType} from "./redux/redux-store";
import {StoreType} from "./redux/store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


export type AppProps = {
    store: StoreType
    state: AppStateType
}

export function App(props: AppProps) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friendsData={props.state.friendsSideBar.friendsData}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile store={props.store}/>}/>
                    <Route path='/dialogs'
                           element={<DialogsContainer store={props.store}/>}/>
                    {/*<Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}


