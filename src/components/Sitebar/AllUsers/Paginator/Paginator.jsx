import React from 'react'
import s from './Paginator.module.css'

const Paginator = ({totalUsersCount, countUsersOnPage, currentPage, onPageChanged}) => {
    let pages = [],
        countPages = Math.ceil(totalUsersCount / countUsersOnPage);

    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }
    return (
            <div>
                {
                    pages.map(p => {
                        return <span className={currentPage === p && s.selectedPage} key={p.id}
                                     onClick = {() => {onPageChanged(p)}}> {p} </span>
                    })
                }
            </div>
    )
};


export default Paginator