import React, {ChangeEvent} from 'react'
import s from './Status.module.css'

type StateType = {
    status: string
    statusMod: boolean
}
type PropsType = {
    status: string
    updateUserStatusThunkCreator: (status: string) => void
}

class Status extends React.Component< PropsType, StateType > {
    state = {
        status: this.props.status,
        statusMod: false
    }
    onChangeStatus = () => {
        console.log('this:', this)
        this.setState({
            statusMod: true
        });
    }
    offChangeStatus = () => {
        this.setState({
            statusMod: false
        });
        this.props.updateUserStatusThunkCreator(this.state.status)
    }
    onChangeUserStatus = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (this.state.status.length <= 300) {
            this.setState({status: e.currentTarget.value })
        }
        else {
            this.setState({status: e.currentTarget.value })
            alert('max 300 symbols!')
        }
    }
    componentDidUpdate(prevProps: PropsType, prevState:StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.statusMod
                    ? <span onDoubleClick={this.onChangeStatus}>{ this.props.status || 'No status...' }</span>
                    : <textarea onChange={this.onChangeUserStatus} value={this.state.status} onBlur={this.offChangeStatus} autoFocus={true}/>}
            </div>

        )
    }
}

export default Status


