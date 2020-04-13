import React, {useState} from 'react'
import s from './Paginator.module.css'

const Paginator = ({totalUsersCount, countUsersOnPage, currentPage, onPageChanged, portionSize = 10}) => {
    let pages = [],
        countPages = Math.ceil(totalUsersCount / countUsersOnPage);

    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(countPages / portionSize)
    let [numberPortion, setNumberPortion] = useState(1)
    let leftPortionBoard = (numberPortion - 1) * portionSize + 1
    let rightPortionBoard = numberPortion * portionSize


    let prevClick = () => {
        setNumberPortion(numberPortion - 1)
    }
    let nextClick = () => {
        setNumberPortion(numberPortion + 1)
    }

    let mapPagesWithFilter = (spanClassName, keyId, page) => {
        return <span className={spanClassName} key={keyId}
                     onClick={() => {
                         if (page===0 || page===1 || page===2 || page===3){
                             onPageChanged(page)
                             setNumberPortion(1)
                         }else if (page === countPages ||page === countPages - 1){
                             onPageChanged(page)
                             setNumberPortion(portionCount)
                         }else {
                             onPageChanged(page)
                         }

                     }}> {page} </span>

    }

    return (
        <div className={s.paginator}>
            {(numberPortion > 1) &&
            <>
                {
                    pages.filter(p => p >= 0 && p < 4).map(p => {
                        return mapPagesWithFilter(currentPage === p && s.selectedPage, p.id, p)
                    })
                }
                <span className={s.drops}> ... </span>
                <button className={s.prevNextButton} onClick={prevClick}>&larr;</button>
            </>
            }
            {/*------------------------------------------------------------------------------------------------*/}
            {
                pages.filter(p => p >= leftPortionBoard && p <= rightPortionBoard).map(p => {
                    return mapPagesWithFilter(currentPage === p && s.selectedPage, p.id, p)
                })
            }
            {/*-----------------------------------------------------------------------------------------------*/}
            {(numberPortion < portionCount) &&
            <>
                <button className={s.prevNextButton} onClick={nextClick}>&rarr;</button>
                <span className={s.drops}> ... </span>
                {
                    pages.filter(p => p >= countPages - 1).map(p => {
                        return mapPagesWithFilter(currentPage === p && s.selectedPage, p.id, p)
                    })
                }
            </>
            }
        </div>
    )
};


export default Paginator