import React, {ChangeEvent, useEffect, useState} from 'react';

export type ProfileStatusPropsType = {
    userID: number
    authUserId: number
    status: string
    updateUserStatusTC: (newStatus: string,) => void
}


export const ProfileStatusOnHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatusTC(status)
    }

    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {props.userID === props.authUserId ?
            !editMode ?
                <div>Current status: <span
                    onDoubleClick={activateEditMode}>{props.status || 'no status yet!'}</span></div> :
                <div><input
                    onChange={onChangeStatusHandler}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}/>
                </div> :
            <div>Current status: <span>{props.status || 'no status yet!'}</span></div>
        }
    </div>
}






