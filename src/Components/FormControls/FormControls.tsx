import React from 'react';
import {WrappedFieldProps} from "redux-form/lib/Field";
import style from './FormControls.module.css'

type FormControlType = WrappedFieldProps;
export const FormControl: React.FC<FormControlType> = (props) => {
    let {input, meta, ...restProps} = props;
    const onError = meta.error && meta.touched;
    return (
        <div className={`${style.formControl} ${onError ? style.error : ""}`}>
            <div>{props.children}</div>
            {onError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: FormControlType) => {
    let {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...props.input}{...restProps}/></FormControl>
}

export const Input = (props: FormControlType) => {
    let {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...props.input}{...restProps}/></FormControl>
}