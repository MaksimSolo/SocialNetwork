import {addPostAC} from "../../../redux/reducers/profileDataReducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {ActionType} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => ({profileData: state.profileData,})
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

