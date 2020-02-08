import React from 'react'
import s from './Wall.module.css'
import Post from './Post/Post'
import { createRef } from 'react'
import { onPostTextChangeActionCreator, addPostActionCreator } from '../../../../../redux/data'


let Wall = (props) => { 

    let postItems = props.data.postData.map( p => <Post header={p.header} content={p.content} data={p.data} />)
   
//------------------------------------------------    
    let textPostPoint = React.createRef();
    let addPost = () => {
        textPostPoint.current.value === '' ? alert('Empty field! Try to write down again!') :  props.dispatch(addPostActionCreator());
    }

    let onPostTextChange = (text) => {
        let newPostText = textPostPoint.current.value;
        props.dispatch(onPostTextChangeActionCreator(newPostText));
    }
//------------------------------------------------
    return (
        <div className={s.wall}>

            <div className={s.wall_input}>
                <textarea onChange = {onPostTextChange} ref={textPostPoint} 
                        name="for_post" rows="2" cols="65" placeholder="Your text..." value = {props.newPostText}/>{s.text}
                <div className={s.button_wrapper}>
                    <button className={s.button} onClick={addPost}>Send</button>
                </div>{/* button_wrapper   */}
            </div>{/* wall_input   */}

            <hr className={s.hr} />

            <div className={s.posts_wrapper}>
                {postItems}
            </div>{/* posts_wrapper   */}
        </div>
    )
}

export default Wall
