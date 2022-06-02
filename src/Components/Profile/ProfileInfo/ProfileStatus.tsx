import React, {ChangeEvent} from 'react';
import {apiProfileComp} from "../../../api/api-profile";

export type ProfileStatusPropsType = {
    userID: number
}

export type ProfileStatusStateType = {
    editMode?: boolean
    status: string
    oldStatus: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    state: ProfileStatusStateType = {
        editMode: false,
        status: '',
        oldStatus: ''
    };

    componentDidMount() {
        apiProfileComp.getUserProfileStatus(this.props.userID).then((r) => {
            this.setState({status: r, oldStatus: r})
        })
    }

    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: `${e.currentTarget.value}`})

    }
    toServer = () => {
        debugger
        apiProfileComp.updateUserProfileStatus(this.state.status).then((r) => {
            debugger
            console.log('PUT req is OK!')
        }).catch(err => {
            debugger
            console.log(err)
            this.setState({status: this.state.oldStatus})
        })
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
        debugger
        this.toServer()
        this.setState({
            editMode: false
        })
    }

    render = () => <div>
        {!this.state.editMode ?
            <div><span onDoubleClick={this.activateEditMode}>{this.state.status || 'no status yet!'}</span></div> :
            <div><input
                onChange={this.onChangeStatusHandler}
                autoFocus={true}
                onBlur={this.deactivateEditMode}
                value={this.state.status}/>
            </div>}
    </div>
}

export default ProfileStatus

