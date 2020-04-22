
import React from 'react'
import s from './Main.module.css'
import Main_left from './Main_left/Main_left'
import MainRight from './Main_right/MainRight'
import Loader from "../common/Loader/Loader";

let Main = (props) => { //postData
    if(!props.profile) {
        return <Loader/>
    }
    return(
        <div className = {s.main}>
            <div className = {s.main_wrapper}>
               <Main_left store = {props.store}
                          isOwner = {props.isOwner}
                          friendData = {props.state.mainPage.friendData}
                          savePhoto = {props.savePhoto}

                          profile = {props.profile}/>

               <MainRight store = {props.store}
                          personData = {props.state.mainPage.personData}
                          isOwner = {props.isOwner}
                          saveNewData ={props.saveNewData}
                          userId = {props.userId}

                          profile = {props.profile}
                          status={props.status}
                          updateUserStatus={props.updateUserStatus}
                            />
                
            </div> {/*main_wrapper*/}   
        </div> 
        )
    }

export default Main