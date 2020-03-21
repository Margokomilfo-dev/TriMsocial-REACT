import React from 'react'
import s from './Person_info.module.css'
import Loader from "../../../../common/Loader/Loader";
import Status from "./Status/Status";
import Main_left from "../../../Main_left/Main_left";

class Person_info extends React.Component {
    state= {
        fio: 'Ivanova Ivanna',
        first_surname: 'Sidorova',
        nickname: '@ivasha',
        status: 'Никогда не жалуйтесь на судьбу! Ей с вами, может быть, тоже не очень-то и приятно=)',
        statusMod: false,
        birthday_date: '12.12.1984',
        relationship: 'married',
        country: 'New Zealand',
        city: 'Aucland',
        profession: 'actress'
    }
    render() {
        if (!this.props.profile) {return <Loader/>}
        return (
            <div className={s.section_person_info}>
                <div className={s.main_info}>
                    <div className={s.fio}> {this.props.profile.fullName} <span
                        className={s.first_surname}> {this.state.first_surname} </span></div>
                    <div className={s.nick}>nick-name: <span className={s.nickname}>{this.state.nickname}</span></div>

                    <div className={s.status}>
                        <Status status={this.props.status}
                                updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}/>
                    </div>
                    <hr/>
                    <div>
                        <span className={s.titles}> Birthday:</span>
                        <span className={s.birthday_date}>{this.state.birthday_date}</span>
                    </div>
                    <div>
                        <span className={s.titles}> Relationship:</span>
                        <span className={s.relatonship}>{this.state.relationship}</span>
                    </div>
                    <div>
                        <span className={s.titles}> Country:</span>
                        <span className={s.country}>{this.state.country}</span>
                    </div>
                    <div>
                        <span className={s.titles}> City:</span>
                        <span className={s.city}>{this.state.city}</span>
                    </div>
                    <div>
                        <span className={s.titles}> Profession:</span>
                        <span className={s.profession}>{this.state.profession}</span>
                    </div>

                    <hr/>

                </div>
                {/*main_info*/}
            </div>
        )
    }
}
export default Person_info


