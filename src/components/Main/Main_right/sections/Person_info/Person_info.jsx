import React from 'react'
import s from './Person_info.module.css'

let Person_info = (props) => {
    return (
        <div className = {s.section_person_info}>
            <div className = {s.main_info}>
                <div className = {s.fio}> {props.data.fio} <span className = {s.first_surname}> {props.data.first_surname} </span></div>
                <div className = {s.nick}>nick-name: <span className = {s.nickname}>{props.data.nickname}</span> </div>
                <div className={s.status}>
                    <textarea name="message" rows="2" cols="65" placeholder="Status..." >{props.data.status}</textarea>
                </div> 

                <hr/>

                <div>
                    <span className = {s.titles}> Birthday:</span> 
                    <span className = {s.birthday_date}>{props.data.birthday_date}</span>
                </div>
                <div>
                    <span className = {s.titles}> Relationship:</span> 
                    <span className = {s.relatonship}>{props.data.relationship}</span>
                </div>
                <div>
                    <span className = {s.titles}> Country:</span> 
                    <span className = {s.country}>{props.data.country}</span>
                </div>
                <div>
                    <span className = {s.titles}> City:</span> 
                    <span className = {s.city}>{props.data.city}</span>
                </div>
                <div>
                    <span className = {s.titles}> Profession:</span> 
                    <span className = {s.profession}>{props.data.profession}</span>
                </div>
                
                <hr/>

            </div>  {/*main_info*/}   
        </div>
    
    )
}

export default Person_info