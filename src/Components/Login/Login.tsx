import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
//handlesubmit приходит к нам из контейнера
    return <form onSubmit={props.handleSubmit}>
        <div><Field name={'Login'} placeholder={"Login"} component={'input'}/></div>
        <div><Field name={'Password'} placeholder={"Password"} component={'input'}/></div>
        <div><Field name={'remember me'} type={"checkbox"} component={'input'}/> remember me</div>
        <div>
            <button>Login</button>
        </div>
    </form>;
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)