import React from 'react'
import s from './Post.module.css'
import photo from './ava.jpg'

let Post = (props) => {
    return (
        <div className={s.post_wrapper}>
            <div className={s.post_item}>
                <div className={s.left_wrapper}>
                    <img src={photo} alt="ava" />
                </div>

                <div className={s.right_wrapper}>
                    <div className={s.header}>{props.header}</div>
                    <div className={s.content}>
                        <div className={s.post_text}>{props.content}</div>
                    </div>
                    <div className={s.footer}>
                        <div className={s.data}>data: <span>{props.data}</span></div>
                    </div>
                </div>
            </div>

            <div className={s.line}>
                <div className={s.lines}></div>
                <div className={s.stars}>* * * * * * * *</div>
                <div className={s.lines}></div>
            </div>
        </div>
    )
}

export default Post
