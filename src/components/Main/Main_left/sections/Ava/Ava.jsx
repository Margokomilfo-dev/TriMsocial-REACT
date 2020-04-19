import React from 'react'
import s from './Ava.module.css'
import noPhoto from './noPhoto.png'
// import photo from './ava.jpg'


let Ava = ( {savePhoto, ...props}) => {
    const onMainPhotoChanged = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className = {s.photo}>
            <div className={s.img}>
                {/*<img src={photo} alt={photo}/>*/}
                <img src={props.profile.photos.large != null ? props.profile.photos.large : noPhoto} alt={noPhoto}/>
            </div>
            <div>
                {props.isOwner &&
                    <input type={"file"} onChange={onMainPhotoChanged}/>
                }
            </div>

        </div>
    )
}


export default Ava

