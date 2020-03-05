import React from 'react'
import s from './Person_info.module.css'
import Loader from "../../../../common/Loader/Loader";

let Person_info = (props) => {
    if (!props.profile){
        return <Loader/>
    }
    return (
        <div className = {s.section_person_info}>
            <div className = {s.main_info}>
                <div className = {s.fio}> {props.profile.fullName} <span className = {s.first_surname}> {props.state.first_surname} </span></div>
                <div className = {s.nick}>nick-name: <span className = {s.nickname}>{props.state.nickname}</span> </div>
                <div className={s.status}>
                    <textarea name="message" rows="2" cols="65" placeholder="Status..." >{props.state.status}</textarea>
                </div> 

                <hr/>

                <div>
                    <span className = {s.titles}> Birthday:</span> 
                    <span className = {s.birthday_date}>{props.state.birthday_date}</span>
                </div>
                <div>
                    <span className = {s.titles}> Relationship:</span> 
                    <span className = {s.relatonship}>{props.state.relationship}</span>
                </div>
                <div>
                    <span className = {s.titles}> Country:</span> 
                    <span className = {s.country}>{props.state.country}</span>
                </div>
                <div>
                    <span className = {s.titles}> City:</span> 
                    <span className = {s.city}>{props.state.city}</span>
                </div>
                <div>
                    <span className = {s.titles}> Profession:</span> 
                    <span className = {s.profession}>{props.state.profession}</span>
                </div>
                
                <hr/>

            </div>  {/*main_info*/}   
        </div>
    
    )
}

export default Person_info