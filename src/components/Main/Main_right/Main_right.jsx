/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import s from './Main_right.module.css'
import Person_info from './sections/Person_info/Person_info'
import Statistic from './sections/Statistic/Statistic'
import Wall from './sections/Wall/Wall'

let Main_right = (props) => {
    debugger
    console.log(props)
    return (
        <div className = {s.main_right}>

            <div className = {s.section}>
                <Person_info data = {props.personData}/>
            </div> {/*section*/}
                    

            <div className = {s.section}>
               <Statistic />
            </div> {/*section*/}

            <div className = {s.section}>
               <Wall data = {props} 
                    newPostText={props.newPostText}
                    dispatch = {props.dispatch} />
            </div> {/*section*/}
        </div>
    )
}

export default  Main_right