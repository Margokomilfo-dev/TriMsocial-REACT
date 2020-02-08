import React from 'react'
import s from './Ava.module.css'
import photo from './ava.jpg'

let Ava = () => {
    return (
        <div className = {s.photo}>
            <img src={photo} alt={photo}/>
            <button className = {s.button}>Edit</button>
        </div>
    )
}


export default Ava