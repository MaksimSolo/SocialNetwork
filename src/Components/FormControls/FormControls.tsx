import React from 'react';
import {WrappedFieldProps} from "redux-form/lib/Field";
import style from './FormControls.module.css'
import {Field} from "redux-form";

type FormControlType = WrappedFieldProps;
export const FormControl: React.FC<FormControlType> = (props) => {

    let {meta:{error,touched}, children} = props;
    const onError = error && touched;
    return (
        <div className={`${style.formControl} ${onError ? style.error : ""}`}>
            <div>{children}</div>
            {onError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props: FormControlType) => {
    let {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}

export const Input = (props: FormControlType) => {

    let {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}


//вспомогательная функция автоматизированной генерации полей Field с нужными аргументами
export const createField = (validators: Array<Function>, name: string, type: string, placeholder: string, component: React.FC<FormControlType>, text: string) =>
    <div>
        <Field validate={validators}
               name={name}
               type={type}
               placeholder={placeholder}
               component={component}/>
        {text}
    </div>


