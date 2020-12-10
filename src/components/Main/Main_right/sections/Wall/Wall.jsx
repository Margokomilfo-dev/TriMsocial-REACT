import React from 'react'
import s from './Wall.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";


function AddPostForm(props) {

    return <>
        <form className={s.wall_input} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'for_post'} placeholder={'Your text...'} rows={'2'} cols={'65'}/>
            <div className={s.button_wrapper}>
                <button className={s.button}>Send</button>
            </div>
            {/* button_wrapper   */}
        </form>
        {/* wall_input   */}
    </>;
}

let AddNewPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm)

let Wall = (props) => {
    let postItems = props.postData.map( p => <Post header={p.header} content={p.content} state={p.state} key={p.id} profile={props.profile} data={p.data}/>)
    let addNewPost = (values) => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        props.addPostTC(values.for_post, today);

        //     textPostPoint.current.value === '' ? alert('Empty field! Try to write down again!') :  props.addPost();
    }

//------------------------------------------------
    return (
        <div className={s.wall}>
            <AddNewPostReduxForm onSubmit={addNewPost} />
            <hr className={s.hr}/>
            <div className={s.posts_wrapper}>
                {postItems}
            </div>
            {/* posts_wrapper   */}
        </div>
    )
}

export default Wall
