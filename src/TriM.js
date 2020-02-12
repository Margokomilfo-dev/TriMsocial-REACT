/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './TriM.js'
import './TriM.css'
import Header from './components/Header/Header.jsx'
import Sitebar from './components/Sitebar/Sitebar.jsx'
import { Route, BrowserRouter } from 'react-router-dom'
import Last_seen from './components/Last_seen/Last_seen.jsx'
import Main from './components/Main/Main.jsx'
import Message from './components/Sitebar/Message/Message.jsx'
import Photos from './components/Sitebar/Photos/Photos.jsx'
import Friends from './components/Sitebar/Friends/Friends.jsx'
import News from './components/Sitebar/News/News.jsx'
import Music from './components/Sitebar/Music/Music.jsx'
import Muvies from './components/Sitebar/Muvies/Muvies.jsx'
import Groups from './components/Sitebar/Groups/Groups.jsx'


function TriM(props) {
  return (
    <div className='container'>
      <Header />
      <div className='wrapper'>
        <Sitebar />
        <div className='main_wrapper'>
          <Last_seen last_seen = 'Online...' />
          <Route path = '/profile' render = {() => <Main store = {props.store}
                                                         state ={props.state} />} />
          <Route path = '/message' render = {() => <Message store = {props.store}
                                                          messagePage = {props.state.messagePage}
                                                          dispatch = {props.dispatch} />} />
          <Route path = '/photos' render = {() => <Photos />} />  
          <Route path = '/friends' render = {() => <Friends />}/> 
          <Route path = '/news' render = {() => <News />}/> 
          <Route path = '/music' render = {() => <Music />}/> 
          <Route path = '/muvies' render = {() => <Muvies />}/> 
          <Route path = '/groups' render = {() => <Groups />}/> 
        </div> {/* main_wrapper */}
      </div>  {/* wrapper */}
    </div>
  )
}

export default TriM
