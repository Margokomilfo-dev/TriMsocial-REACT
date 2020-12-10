import React, {useEffect, useState} from 'react'
import s from './Status.module.css'

const StatusWithHooks = (props) => {
    let [statusMod, setStatusMod] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let onChangeStatus = () => { setStatusMod(true)}

    let offChangeStatus = () => {
        setStatusMod(false)
        props.updateUserStatus(status)
    }

    let onChangeUserStatus = (e) => {
        if (status.length <= 300) {
            setStatus(e.currentTarget.value)
        }
        else {
            setStatus(e.currentTarget.value)
             alert('max 300 symbols!')
        }
    }

    return (
        <div className={s.status}>
            {!props.isOwner &&
                <span >{ props.status }</span>}
            {props.isOwner &&
            (!statusMod
                ? <span onDoubleClick={onChangeStatus}>{ props.status || 'No status...' }</span>
                : <textarea onChange={onChangeUserStatus} value={status} onBlur={offChangeStatus} autoFocus={true}/>)

            }
        </div>
    )
}

export default StatusWithHooks


