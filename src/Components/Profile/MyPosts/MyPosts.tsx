import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfileDataType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../FormControls/FormControls";


type MyPostsType = {
    profileData: ProfileDataType
    addPost: (postText: string) => void
}

export class MyPosts extends React.Component<MyPostsType> {

    // componentDidMount() { //имитируем изм-е стейта чтобы встал вопрос о перерисовке
    //     setTimeout(()=>{this.setState({a:12})},3000)
    // }

    shouldComponentUpdate(nextProps: Readonly<MyPostsType>, nextState: Readonly<{}>, nextContext: any): boolean {
        return nextProps !== this.props || nextState !== this.state;
    }
    //shouldComponentUpdate возвращает true - тогда будет перерисовка
    //shouldComponentUpdate возвращает false - тогда перерисовки не будет


    render() {
        console.log('MyPosts')

        let postsItems = this.props.profileData.postData.map(post =>
            <Post
                key={post.id}
                message={post.message}
                id={post.id}
                likeCount={post.likeCount}
            />)
            .reverse()

        const addNewPost = (formData: MyPostFormDataType) => {
            this.props.addPost(formData.postText);
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
    }
};


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