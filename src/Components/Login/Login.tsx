import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUserTC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import style from './../FormControls/FormControls.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginType = {
    authUserId: number
    isAuth: boolean
    loginUserTC: (formData: FormDataType) => void
}
export const Login = (props: LoginType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginUserTC(formData)
    }
    if (props.isAuth) {
        return <Navigate to={`/profile`}/>
    } else {
        return (
            <div>
                <h3>To log in, please enter your data in the forms below</h3>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        );
    }
};

const mapStateToPropsRedirectToProfile = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    authUserId: state.auth.data.id
})
export const LoginContainer = connect(mapStateToPropsRedirectToProfile, {loginUserTC})(Login)


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

//handlesubmit приходит к нам из контейнера
    return <form onSubmit={props.handleSubmit}>
        <div><Field validate={[required]} name={'email'} placeholder={"e-mail"} component={Input}/></div>
        <div><Field validate={[required]} name={'password'} type={"password"} placeholder={"password"}
                    component={Input}/></div>
        <div><Field name={'rememberMe'} type={"checkbox"} component={'input'}/> remember me</div>
        {props.error && <div className={style.formSummaryError}>{props.error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>;
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)