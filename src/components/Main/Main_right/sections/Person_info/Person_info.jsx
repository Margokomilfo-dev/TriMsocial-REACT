import React, {useState} from 'react'
import s from './Person_info.module.css'
import Loader from "../../../../common/Loader/Loader";
import StatusWithHooks from "./Status/StatusWithHooks";
import {createField} from "../../../../../object_helpers/object_helpers";
import {Input, validate} from "../../../../Validations";
import {reduxForm} from "redux-form";

let Person_info = ({profile, status, updateUserStatus, isOwner, fullName, userId, saveNewData}) => {

    let [editMod, setEditMod] = useState(false)

    if (!profile) {
        return <Loader/>
    }
    let onSubmit = (formData) => {
        saveNewData(formData)
        setEditMod(false)
    };
    return (
        <div className={s.section_person_info}>
            <div className={s.main_info}>
                <div className={s.fio}> {profile.fullName} </div>
                <div className={s.status}>
                    <StatusWithHooks status={status}
                                     updateUserStatus={updateUserStatus}
                                     isOwner={isOwner}/>
                </div>
                <hr/>
                {editMod
                    ? <PersonInfoDataFormReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
                    : <PersonInfoData profile={profile} isOwner={isOwner}
                                      goToEditMod={() => {setEditMod(true)}}/>
                }
            </div>
            {/*main_info*/}
        </div>
    )
}


const PersonInfoData = ({profile, isOwner, goToEditMod}) => {
    return (
        <div>
            <div><u>About me</u>: {profile.aboutMe}</div>
            <div><u>Looking for a job</u>: {profile.lookingForAJob ? "yes" : "no"}</div>

            {profile.lookingForAJob &&
            <div><u>My professional skills</u>: {profile.lookingForAJobDescription}</div>}
            <div><u>Contacts</u>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactKey={key} contactValue={profile.contacts[key]}/>})}
            </div>
            {isOwner && <button className={s.button} onClick={goToEditMod}>Edit</button>}
            </div>
    )
}
const PersonInfoDataForm = ({handleSubmit, profile}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div><u>full name</u>: {createField(null, Input, 'textarea', 'fullName', 'Full name', null )}</div>
            <div><u>About me</u>:  {createField(null, Input, 'textarea', 'aboutMe', 'About me', null )}</div>
            <div><u>Looking for a job</u>: {createField(null, Input, 'checkbox', 'lookingForAJob', null, null )}</div>
            <div><u>My professional skills</u>: {createField(null, Input, 'textarea', 'lookingForAJobDescription', 'Your skills', null )}</div>
            <div><u>Contacts: </u> {Object.keys(profile.contacts).map(key => {
                return <div>
                    {key}: {createField(null, Input, 'textarea', 'contacts.'+ key, 'Key', null )}
                </div>})}
            </div>
            <button className={s.button}>Save</button><br/>
        </form>
    )
}

let PersonInfoDataFormReduxForm = reduxForm({form: 'personInfo'})(PersonInfoDataForm)

const Contact = ({contactKey, contactValue}) => {
    return (
        <div className={s.link}>
            <span className={s.link_name}>{contactKey}:</span><span className={s.http}>{contactValue}</span>
        </div>
    )
}
export default Person_info


