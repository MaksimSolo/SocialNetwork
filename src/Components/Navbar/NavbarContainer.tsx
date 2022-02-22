import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {doSomeAC, doSomeType} from "../../redux/friendsSideBarReducer";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => ({friendsSideBar: state.friendsSideBar})
const mapDispatchToProps = (dispatch: (action: doSomeType) => void) => {
    return {
        doSome: () => {
            dispatch(doSomeAC())
        }
    }
}
export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

