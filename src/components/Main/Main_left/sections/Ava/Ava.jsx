import React from 'react'
import s from './Ava.module.css'
import noPhoto from './noPhoto.png'
// import photo from './ava.jpg'


let Ava = (props) => {
    return (
        <div className = {s.photo}>
            <div className={s.img}>
                {/*<img src={photo} alt={photo}/>*/}
                <img src={props.profile.photos.large != null ? props.profile.photos.large : noPhoto} alt={noPhoto}/>
            </div>
            <div>
                <button className = {s.button}>Edit</button>
            </div>

        </div>
    )
}


export default Ava

