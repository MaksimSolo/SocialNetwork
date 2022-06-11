import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {required} from "../../utils/validators/validators";

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
        <div><Field validate={[required]} name={'login'} placeholder={"Login"} component={Input}/></div>
        <div><Field validate={[required]} name={'password'} placeholder={"Password"} component={Input}/></div>
        <div><Field name={'rememberMe'} type={"checkbox"} component={'input'}/> remember me</div>
        <div>
            <button>Login</button>
        </div>
    </form>;
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)