import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUserTC} from "../../redux/reducers/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import style from '../common/FormControls/FormControls.module.css'


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export type FieldsNamesType = Extract<keyof FormDataType, string>

type LoginType = {
    authUserId: number
    isAuth: boolean
    loginUserTC: (formData: FormDataType) => void
}
export const Login: React.FC<LoginType> = ({isAuth, loginUserTC, ...rest}) => {

    const onSubmit = (formData: FormDataType) => {
        loginUserTC(formData)
    }
    if (isAuth) {
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


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error,}) => {

//handlesubmit приходит к нам из контейнера
    return <form onSubmit={handleSubmit}>

        {createField<FieldsNamesType>([required], 'email', '', "e-mail", Input,)}
        {createField<FieldsNamesType>([required], 'password', 'password', "password", Input,)}
        {createField<FieldsNamesType>([], 'rememberMe', 'checkbox', undefined, Input, 'remember me')}
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <button>Login</button>
        </div>
        <p style={{fontStyle: "italic", color: "rebeccapurple"}}>*please enter the following test data in the
            appropriate forms:
            <br/>Email: free@samuraijs.com
            <br/>Password: free</p>
    </form>;
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)