import React from 'react';
import style from './Paginator.module.css';


type PaginatorPropsType = {
    totalUsersCount: number,
    pageSize: number
    currentPage: number
    onChangingCurrentPage: (newPage: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = (
    {
        totalUsersCount,
        pageSize,
        currentPage,
        onChangingCurrentPage,
    }
) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pagesNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNumbers.push(i)
    }
    return (
        <div className={style.paginator}>
            {pagesNumbers.map(p => {
                    return <span key={p}
                                 className={currentPage === p ? style.selectedPage : ''}
                                 onClick={(e) => onChangingCurrentPage(p)}>..{p}</span>
                }
            )}
        </div>
    )
};
