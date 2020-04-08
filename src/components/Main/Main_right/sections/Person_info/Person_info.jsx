import React from 'react'
import s from './Person_info.module.css'
import Loader from "../../../../common/Loader/Loader";
import StatusWithHooks from "./Status/StatusWithHooks";

class Person_info extends React.Component {
    state= {
        fio: '',
        first_surname: '',
        nicknameInst: 'margocha_pr',
        httpVk: '',
        httpTwitter: '',
        status: 'Никогда не жалуйтесь на судьбу! Ей с вами, может быть, тоже не очень-то и приятно=)',
        statusMod: false,
        birthday_date: '29.10.1988',
        relationship: 'married',
        country: 'New Zealand',
        city: 'Aucland',
        profession: 'Frontend Developer'
    }
    render() {
        if (!this.props.profile) {return <Loader/>}
        return (
            <div className={s.section_person_info}>
                <div className={s.main_info}>
                    <div className={s.fio}> {this.props.profile.fullName} <span
                        className={s.first_surname}> {this.state.first_surname} </span></div>

                    <div className={s.status}>
                        <StatusWithHooks status={this.props.status}
                                updateUserStatus={this.props.updateUserStatus}/>
                    </div>

                    <div className={s.link}>  Instagram : <span className={s.nickname}>{`@${this.state.nicknameInst}`}</span></div>
                    <div className={s.link}>
                        <span className={s.link_name}> Facebook: </span>
                        <span className={s.http}>{this.props.profile.contacts.facebook}</span>
                    </div>
                    <div className={s.link}> <span className={s.link_name}> VK: </span><span className={s.http}>{this.props.profile.contacts.vk}</span></div>
                    <div className={s.link}><span className={s.link_name}> Twitter: </span><span className={s.http}>{this.props.profile.contacts.twitter}</span></div>
                    <div className={s.link}><span className={s.link_name}> Instagram: </span> <span className={s.http}>{this.props.profile.contacts.instagram}</span></div>
                    <div className={s.link}><span className={s.link_name}> Youtube: </span> <span className={s.http}>{this.props.profile.contacts.youtube}</span></div>
                    <div className={s.link}><span className={s.link_name}> GitHub: </span><span className={s.http}>{this.props.profile.contacts.github}</span></div>
                    <div className={s.link}><span className={s.link_name}> MainLink: </span><span className={s.http}>{this.props.profile.contacts.mainlink}</span></div>
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


