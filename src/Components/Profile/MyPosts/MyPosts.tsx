import React, {useMemo} from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";
import {ProfileDataType} from "../../../redux/reducers/profile-data-reducer";


type MyPostsType = {
    profileData: ProfileDataType
    addPost: (postText: string) => void
}

export const MyPosts = React.memo((props: MyPostsType) => {


    let postsItems = useMemo(()=>props.profileData.postData.map(post =>
        <Post
            key={post.id}
            message={post.message}
            id={post.id}
            likeCount={post.likeCount}
        />)
        .reverse(),[props.profileData.postData])

    const addNewPost = (formData: MyPostFormDataType) => {
        props.addPost(formData.postText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <MyPostsReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsItems}
            </div>
        </div>
    );
});


export type MyPostFormDataType = {
    postText: string;
}

const maxLength10 = maxLengthCreator(10);
const MyPostForm: React.FC<InjectedFormProps<MyPostFormDataType>> = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10,]}
                       name={'postText'}
                       component={Textarea}
                       placeholder={'write whatever comes to mind'}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm<MyPostFormDataType>({form: 'MyPostForm'})(MyPostForm)