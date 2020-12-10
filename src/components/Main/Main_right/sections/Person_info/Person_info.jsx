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
        saveNewData(formData).then(() => {
            setEditMod(false)
        })
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
                    ? <PersonInfoDataFormReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                    : <PersonInfoData profile={profile} isOwner={isOwner}
                                      goToEditMod={() => {
                                          setEditMod(true)
                                      }}/>
                }
            </div>
            {/*main_info*/}
        </div>
    )
}


const PersonInfoData = ({profile, isOwner, goToEditMod}) => {
    return (
        <div>
            <div className={s.infoBlock}>
                <div className={s.infoTitles}> About me:</div>
                <div className={s.infoText}>{profile.aboutMe}</div>
                <div className={s.infoTitles}>Looking for a job:</div>
                <div className={s.infoText}>{profile.lookingForAJob ? "yes" : "no"}</div>
                {profile.lookingForAJob &&
                <div className={s.infoTitles}>My professional skills:</div>}
                {profile.lookingForAJob &&
                <div className={s.infoText}>{profile.lookingForAJobDescription}</div>}

                <div><span className={s.infoTitles}>Contacts:</span>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactKey={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
                {isOwner && <button className={s.button} onClick={goToEditMod}>Edit</button>}
            </div>
        </div>


    )
}
const PersonInfoDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*---------------common_error-------------------*/}
            {error &&
            <div className={s.commonError}>
                {error}
            </div>}
            {/*---------------common_error-------------------*/}
            <div>
                <span className={s.infoTitles}>Full name:</span>
                <div className={s.input}>{createField(null, Input, 'textarea', 'fullName', 'Full name', null)}</div>
            </div>
            <div>
                <span className={s.infoTitles}>About me:</span>
                <div className={s.input}>{createField(null, Input, 'textarea', 'aboutMe', 'About me', null)}</div>
            </div>
            <div>
                <span className={s.infoTitles}>Looking for a job:</span>
                <div className={s.input}>{createField(null, Input, 'checkbox', 'lookingForAJob', null, null)}</div>
            </div>
            <div>
                <span className={s.infoTitles}>My professional skills:</span>
                <div className={s.input}>{createField(null, Input, 'textarea', 'lookingForAJobDescription', 'Your skills', null)}</div>
            </div>
            <div>
                <span className={s.infoTitles}>Contacts:</span>{Object.keys(profile.contacts).map(key => {
                return <div>
                    {key}: <span className={s.input}>{createField(null, Input, 'textarea', 'contacts.' + key, key, null)}</span>
                </div>
            })}
            </div>

            <button className={s.button}>Save</button>
            <br/>
        </form>
    )
}

let PersonInfoDataFormReduxForm = reduxForm({form: 'personInfo'})(PersonInfoDataForm)

const Contact = ({contactKey, contactValue}) => {
    return (
        <div className={s.link_blok}>
            <div className={s.contactKey}>{contactKey}:</div>
            <div className={s.contactValue}>{contactValue}</div>
        </div>
    )
}
export default Person_info


