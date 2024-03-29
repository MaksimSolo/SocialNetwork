import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {doSomeAC, doSomeType} from "../../redux/reducers/friends-sidebar-reducer";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => ({friendsSideBar: state.friendsSideBar, isAuth: state.auth.isAuth})
const mapDispatchToProps = (dispatch: (action: doSomeType) => void) => {
    return {
        doSome: () => {
            dispatch(doSomeAC())
        }
    }
}


export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

