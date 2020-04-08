import React from 'react'
import s from './Main_right.module.css'
import PersonInfo from './sections/Person_info/Person_info'
import Statistic from './sections/Statistic/Statistic'
import WallContainer from './sections/Wall/WallContainer'

let MainRight = (props) => {
    return (
        <div className = {s.main_right}>

            <div className = {s.section}>
                <PersonInfo state = {props.personData}

                            profile={props.profile}
                            status={props.status}
                            updateUserStatus={props.updateUserStatus}/>
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

export default  MainRight