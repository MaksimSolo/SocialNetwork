import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./Components/Navbar/NavbarContainer";
import {WithRouterProfileContainer} from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {LoginContainer} from "./Components/Login/Login";
import UsersContainer from "./Components/Users/UsersContainer";
import {AppStateType} from "./redux/redux-store";
import {connect} from "react-redux";
import {initializeApp} from "./redux/reducers/appInitReducer";
import Preloader from "./Components/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "./customWithRouter";


type AppContainerType = {
    initialized: boolean
    initializeApp: () => void
}

export class App extends React.Component<AppContainerType, AppStateType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render = () => {

        if (this.props.initialized) {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/profile/*' element={<WithRouterProfileContainer/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<LoginContainer/>}/>
                            {/*<Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>*/}
                        </Routes>
                    </div>
                </div>
            );
        } else {
            return <Preloader/>
        }
    }
}

const Mstp = (state: AppStateType) => ({initialized: state.app.initialized})

export default compose<React.ComponentType>(
    connect(Mstp, {initializeApp}),
    withRouter,
)(App)