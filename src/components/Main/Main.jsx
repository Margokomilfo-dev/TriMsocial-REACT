/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import s from './Main.module.css'
import Main_left from './Main_left/Main_left'
import Main_right from './Main_right/Main_right'

let Main = (props) => { //postData
    return(
        <div className = {s.main}>
            <div className = {s.main_wrapper}>
               <Main_left store = {props.store}
                            friendData = {props.state.mainPage.friendData}/>

               <Main_right  store = {props.store}
                            personData = {props.state.mainPage.personData}
                            />
                
            </div> {/*main_wrapper*/}   
        </div> 
        )
    }

export default Main