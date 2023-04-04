import React, {useState} from 'react';
import style from './Paginator.module.css';


type PaginatorType = {
  totalUsersCount: number,
  pageSize: number
  currentPage: number
  pagesCountInPortion: number
  onChangingCurrentPage: (newPage: number) => void
}

export const Paginator: React.FC<PaginatorType> = (
  {
    totalUsersCount,
    pageSize,
    currentPage,
    onChangingCurrentPage,
  }
) => {

  const pagesCountInPortion: number = 5;

  let pagesCountTotal = Math.ceil(totalUsersCount / pageSize);

  let portionsCountTotal: number = Math.ceil(pagesCountTotal / pagesCountInPortion);

  const [portionNumber, setPortionNumber] = useState<number>(1)

  let endPortionPageNumber = portionNumber * pagesCountInPortion
  let startPortionPageNumber = 1 + (endPortionPageNumber - pagesCountInPortion)

  const getPortionForRender = () => {
    const array = []
    for (let i = 1; i <= portionsCountTotal; i++) {
      array.push(i)
    }
    return array
      .filter(i => i >= startPortionPageNumber && i <= endPortionPageNumber)
      .map(p => <span key={p}
                      className={currentPage === p ? style.selectedPage : ''}
                      onClick={() => onChangingCurrentPage(p)}>..{p}</span>
      )
  }

  return (
    <div className={style.paginator}>
      {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
      {getPortionForRender()}
      {portionNumber < portionsCountTotal && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </div>
  )
};
