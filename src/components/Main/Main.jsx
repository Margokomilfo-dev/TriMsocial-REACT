/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import s from './Main.module.css'
import Main_left from './Main_left/Main_left'
import Main_right from './Main_right/Main_right'

let Main = (props) => { //postData
debugger
    return(
        <div className = {s.main}>
            <div className = {s.main_wrapper}>
               <Main_left  friendData = {props.mainPage.friendData}/>

               <Main_right postData = {props.mainPage.postData} 
                            personData = {props.mainPage.personData} 
                            newPostText={props.mainPage.newPostText}
                            dispatch = {props.dispatch} />
                
            </div> {/*main_wrapper*/}   
        </div> 
        )
    }

export default Main