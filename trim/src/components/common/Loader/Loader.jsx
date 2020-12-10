import React from 'react'
import s from './Loader.module.css'
import loader from "./loader.gif";

let Loader = () => {
    return (
        <div className={s.loader_wrapper}>
            <div className = {s.loader}>
                <img src={loader} alt=""/>
            </div>
        </div>

    )
}
export default Loader