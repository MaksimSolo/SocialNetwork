import {addPostAC, updatePostTextAC} from "../../../redux/profileDataReducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {ActionType} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => ({profileData: state.profileData,})
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updatePostText: (newText: string) => {
            dispatch(updatePostTextAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

