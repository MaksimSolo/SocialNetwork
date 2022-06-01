import React from 'react';

type ProfileStatusPropsType = {
    status: string
}
type ProfileStatusStateType = {
    editMode: boolean
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    state: ProfileStatusStateType = {
        editMode: false
    };

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
    }

    render = () => <div>
        {!this.state.editMode ?
            <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div> :
            <div><input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/></div>}
    </div>
}

export default ProfileStatus

