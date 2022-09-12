import React, {ChangeEvent} from 'react';

export type ProfileStatusPropsType = {
    userID: number
    authUserId: number
    status: string
    updateUserStatusTC: (newStatus: string,) => void
}

export type ProfileStatusStateType = {
    editMode?: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    state: ProfileStatusStateType = {
        editMode: false,
        status: this.props.status,
    };
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>, snapshot?: any) {
        if (prevProps.status!== this.props.status) {
            debugger
            this.setState({status: this.props.status})
        }
    }

    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    activateEditMode = () => {
        this.setState({       //setstate - асинхронен!!!! поэтому он вызовется тогда евентлупом,
            // когда закончат выполняться таски внутри области видимости где находится сетстейт!!
            editMode: true,
        })
        //this.state.editMode = true
        //this.forceUpdate()    - экстренный метод сообщить об изменении стейта и перерендерить компонент
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatusTC(this.state.status)
    }

    render = () => {
        debugger
        return <div>
            {this.props.userID === this.props.authUserId ?
                !this.state.editMode ?
                    <div>Current status: <span
                        onDoubleClick={this.activateEditMode}>{this.props.status || 'no status yet!'}</span></div> :
                    <div><input
                        onChange={this.onChangeStatusHandler}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}/>
                    </div> :
                <div>Current status: <span>{this.props.status || 'no status yet!'}</span></div>
            }
        </div>
    }
}

export default ProfileStatus

