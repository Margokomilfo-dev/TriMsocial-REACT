import React from 'react'
import s from './Main_right.module.css'
import Person_info from './sections/Person_info/Person_info'
import Statistic from './sections/Statistic/Statistic'
import WallContainer from './sections/Wall/WallContainer'
import Main_left from "../Main_left/Main_left";

let Main_right = (props) => {
    return (
        <div className = {s.main_right}>

            <div className = {s.section}>
                <Person_info state = {props.personData}

                             profile={props.profile}
                             status={props.status}
                             updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
            </div> {/*section*/}
                    

            <div className = {s.section}>
               <Statistic />
            </div> {/*section*/}

            <div className = {s.section}>
               <WallContainer  profile={props.profile} />
            </div> {/*section*/}
        </div>
    )
}

export default  Main_right