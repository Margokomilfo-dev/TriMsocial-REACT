import React from 'react'
import s from './Status.module.css'

class Status extends React.Component {
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
    onChangeUserStatus = (e) => {
        if (this.state.status.length <= 300) {
            this.setState({status: e.currentTarget.value })
        }
        else {
            this.setState({status: e.currentTarget.value })
            alert('max 300 symbols!')
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
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


