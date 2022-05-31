import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {doSomeAC, doSomeType} from "../../redux/friendsSideBarReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {withAuthRedirectComponent} from "../../highOrderComp/withAuthRedirectComponent";
import {compose} from "redux";

const mapStateToProps = (state: AppStateType) => ({friendsSideBar: state.friendsSideBar,})
const mapDispatchToProps = (dispatch: (action: doSomeType) => void) => {
    return {
        doSome: () => {
            dispatch(doSomeAC())
        }
    }
}


export const NavbarContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Navbar)

