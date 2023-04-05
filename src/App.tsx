import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {NavbarContainer} from "./Components/Navbar/NavbarContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {LoginContainer} from "./Components/Login/Login";
import {AppStateType, store} from "./redux/redux-store";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import Preloader from "./Components/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "./customWithRouter";
import {withSuspense} from "./highOrderComp/withSuspense";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer').then(module => ({default: module.DialogsContainer})))
const WithRouterProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer').then(module => ({default: module.WithRouterProfileContainer})))
const UsersConnect = React.lazy(() => import('./Components/Users/UsersContainer').then(module => ({default: module.UsersConnect})))


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
              <Route path='/profile/*'
                     element={withSuspense(WithRouterProfileContainer)}/>
              <Route path='/dialogs'
                     element={withSuspense(DialogsContainer)}/>
              <Route path='/users'
                     element={withSuspense(UsersConnect)}/>
              <Route path='/login' element={<LoginContainer/>}/>
              {/* TODO: you must activate other paths when components will have been created*/}
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

const AppContainer = compose<React.ComponentType>(connect(Mstp, {initializeApp}), withRouter)(App)

const SocialNetworkApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </HashRouter>
  )
}
export default SocialNetworkApp;